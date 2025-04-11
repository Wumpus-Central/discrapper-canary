n.d(t, { Z: () => j }), n(953529), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(512722),
    a = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(748780),
    p = n(442837),
    h = n(215569),
    _ = n(481060),
    f = n(612226),
    m = n(951483),
    b = n(714338),
    g = n(607070),
    E = n(460181),
    O = n(585483),
    y = n(264549),
    C = n(981631),
    S = n(388032),
    N = n(268751);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let T = {
    UP: u().throttle(() => (0, E.GN)('ddr-up'), 100),
    DOWN: u().throttle(() => (0, E.GN)('ddr-down'), 100),
    LEFT: u().throttle(() => (0, E.GN)('ddr-left'), 100),
    RIGHT: u().throttle(() => (0, E.GN)('ddr-right'), 100)
};
function I(e) {
    switch (e.keyCode) {
        case C.yXg.ARROW_UP:
            return 'UP';
        case C.yXg.ARROW_DOWN:
            return 'DOWN';
        case C.yXg.ARROW_LEFT:
            return 'LEFT';
        case C.yXg.ARROW_RIGHT:
            return 'RIGHT';
        default:
            return null;
    }
}
let x = [f.Q2.MESSAGE, f.Q2.NAVIGATION, f.Q2.VOICE_AND_VIDEO, f.Q2.CHAT, f.Q2.MISCELLANEOUS];
function P(e) {
    let { showBackdrop: t } = e;
    return (0, r.jsx)('div', { className: l()(N.backdrop, { [N.show]: t }) });
}
function A() {
    let e = i.useMemo(
        () =>
            u()((0, f.Rv)())
                .groupBy((e) => e.group)
                .value(),
        []
    );
    return (0, r.jsx)('div', {
        className: N.keyboardShortcutList,
        children: x.map((t) => {
            let n = e[t],
                i = (0, f.UD)(t),
                o = (0, f.U6)(t);
            return (0, r.jsxs)(
                'div',
                {
                    className: N.keyboardShortcutSection,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(_.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: i
                                }),
                                null != o &&
                                    (0, r.jsx)(_.Text, {
                                        className: N.keybindGroupDescription,
                                        variant: 'text-sm/normal',
                                        children: o
                                    })
                            ]
                        }),
                        (0, r.jsx)(
                            'div',
                            {
                                className: N.keyboardShortcutListGroup,
                                children: n.map((e, t) => {
                                    var n;
                                    return (null == (n = e.predicate) ? void 0 : n.call(e)) === !1
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: N.keybindGroup,
                                                  children: [
                                                      (0, r.jsx)(_.Text, {
                                                          variant: 'text-sm/normal',
                                                          children: e.description
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: 'keybind-shortcuts',
                                                          children: e.binds.map((e) =>
                                                              (0, r.jsx)(
                                                                  _.M2$,
                                                                  {
                                                                      className: N.keybindKey,
                                                                      shortcut: e
                                                                  },
                                                                  e
                                                              )
                                                          )
                                                      })
                                                  ]
                                              },
                                              t
                                          );
                                })
                            },
                            t
                        )
                    ]
                },
                t
            );
        })
    });
}
class R extends i.PureComponent {
    componentDidMount() {
        (this.lastInputedKeys = []), O.S.subscribe(C.CkL.SCROLL_PAGE_UP, this.scrollPageUp), O.S.subscribe(C.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.addEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        O.S.unsubscribe(C.CkL.SCROLL_PAGE_UP, this.scrollPageUp), O.S.unsubscribe(C.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.removeEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: i } = this.state;
        return (0, r.jsxs)(d.Z.div, {
            className: N.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, r.jsxs)(_.H, {
                    className: N.modalTitle,
                    children: [
                        (0, r.jsx)('div', {
                            className: N.content,
                            children: S.NW.string(S.t['1BdUt7'])
                        }),
                        (0, r.jsx)(_.M2$, { shortcut: 'mod+/' })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: N.modalSubtitle,
                    children: S.NW.string(S.t['2t19lZ'])
                }),
                (0, r.jsxs)('div', {
                    className: N.ddrArrows,
                    children: [
                        (0, r.jsx)(w, {
                            arrow: 'LEFT',
                            isActive: n,
                            className: N.left,
                            children: 'left'
                        }),
                        (0, r.jsx)(w, {
                            arrow: 'DOWN',
                            isActive: t,
                            className: N.down,
                            children: 'down'
                        }),
                        (0, r.jsx)(w, {
                            arrow: 'UP',
                            isActive: e,
                            className: N.up,
                            children: 'up'
                        }),
                        (0, r.jsx)(w, {
                            arrow: 'RIGHT',
                            isActive: i,
                            className: N.right,
                            children: 'right'
                        })
                    ]
                }),
                (0, r.jsx)(_.yWw, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, r.jsx)(_.y5t, { children: (0, r.jsx)(A, {}) })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'state', {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new d.Z.Value(1),
                scaleX: new d.Z.Value(1),
                scaleY: new d.Z.Value(0),
                animating: !1
            }),
            v(this, 'scrollerRef', i.createRef()),
            v(this, 'lastInputedKeys', []),
            v(this, 'scrollPageUp', () => {
                let e = this.scrollerRef.current;
                a()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({ animate: !0 });
            }),
            v(this, 'scrollPageDown', () => {
                let e = this.scrollerRef.current;
                a()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({ animate: !0 });
            }),
            v(this, 'arrowUp', (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            v(this, 'arrowDown', (e) => {
                let { direction: t } = e;
                T[t](), this.setState({ [t]: !0 });
            }),
            v(this, 'componentWillLeave', (e) => {
                this.setState({ animating: !0 }),
                    this.state.opacity.setValue(1),
                    this.state.scaleX.setValue(0.5),
                    this.state.scaleY.setValue(1),
                    d.Z.sequence([
                        d.Z.timing(this.state.opacity, {
                            toValue: 0,
                            duration: 800,
                            easing: d.Z.Easing.cubic
                        })
                    ]).start(e);
            }),
            v(this, 'toggleOpacity', () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            v(this, 'getStyles', () => ({
                opacity: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                }),
                transform: [
                    {
                        scaleX: this.state.scaleX.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 2]
                        })
                    },
                    {
                        scaleY: this.state.scaleY.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        })
                    }
                ]
            })),
            v(this, 'handleKeyDown', (e) => {
                if ((this.lastInputedKeys.push(e.keyCode), (this.lastInputedKeys = this.lastInputedKeys.slice(-5)), this.lastInputedKeys[0] === C.yXg.H && this.lastInputedKeys[1] === C.yXg.H && this.lastInputedKeys[2] === C.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === C.yXg.N && this.lastInputedKeys[4] === C.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)) return;
                let t = I(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            v(this, 'handleKeyUp', (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = I(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            v(this, 'onArrowClick', (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function w(e) {
    let { isActive: t, arrow: n, className: o, children: s } = e,
        [a, c] = i.useState(t),
        u = i.useCallback(() => {
            T[n](), c(!0);
        }, [n]);
    return (
        i.useEffect(() => {
            if (a) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [a]),
        (0, r.jsx)(_.P3F, {
            onClick: u,
            className: l()(N.arrow, o, { [N.active]: t || a }),
            children: s
        })
    );
}
function j(e) {
    let { transitionState: t, onClose: n } = e,
        [o, s] = i.useState(!1),
        [a, c] = i.useState(!1),
        u = i.useMemo(() => (__OVERLAY__ ? (0, m.Zg)() : (0, f.Rv)()), []),
        { keyboardModeEnabled: d, useReducedMotion: E } = (0, p.cj)([g.Z], () => ({
            keyboardModeEnabled: g.Z.keyboardModeEnabled,
            useReducedMotion: g.Z.useReducedMotion
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P, { showBackdrop: a }),
            (0, r.jsx)(_.Y0X, {
                className: l()(N.noBackground, { [N.noShadow]: o }),
                size: _.CgR.DYNAMIC,
                'aria-label': S.NW.string(S.t.T9DA2N),
                transitionState: t,
                children: (0, r.jsx)(h.W, {
                    component: 'div',
                    children: o
                        ? (0, r.jsx)(
                              y.Z,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(n, 500);
                                  }
                              },
                              'raging-demo'
                          )
                        : (0, r.jsx)(
                              R,
                              {
                                  content: u,
                                  keyboardModeEnabled: d,
                                  activateRagingDemon: function () {
                                      E || (b.Z.disable(), s(!0), c(!0));
                                  }
                              },
                              'modal'
                          )
                })
            })
        ]
    });
}
