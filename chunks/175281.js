n.d(t, { Z: () => R }), n(953529), n(388685), n(539854);
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
    _ = n(215569),
    h = n(481060),
    f = n(612226),
    m = n(951483),
    g = n(714338),
    b = n(607070),
    E = n(460181),
    C = n(585483),
    O = n(264549),
    y = n(981631),
    v = n(388032),
    N = n(268751);
function S(e, t, n) {
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
let x = {
    UP: u().throttle(() => (0, E.GN)('ddr-up'), 100),
    DOWN: u().throttle(() => (0, E.GN)('ddr-down'), 100),
    LEFT: u().throttle(() => (0, E.GN)('ddr-left'), 100),
    RIGHT: u().throttle(() => (0, E.GN)('ddr-right'), 100)
};
function I(e) {
    switch (e.keyCode) {
        case y.yXg.ARROW_UP:
            return 'UP';
        case y.yXg.ARROW_DOWN:
            return 'DOWN';
        case y.yXg.ARROW_LEFT:
            return 'LEFT';
        case y.yXg.ARROW_RIGHT:
            return 'RIGHT';
        default:
            return null;
    }
}
let T = [f.Q2.MESSAGE, f.Q2.NAVIGATION, f.Q2.VOICE_AND_VIDEO, f.Q2.CHAT, f.Q2.MISCELLANEOUS];
function L(e) {
    let { showBackdrop: t } = e;
    return (0, r.jsx)('div', { className: l()(N.backdrop, { [N.show]: t }) });
}
function P() {
    let e = i.useMemo(
        () =>
            u()((0, f.Rv)())
                .groupBy((e) => e.group)
                .value(),
        []
    );
    return (0, r.jsx)('div', {
        className: N.keyboardShortcutList,
        children: T.map((t) => {
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
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: i
                                }),
                                null != o &&
                                    (0, r.jsx)(h.Text, {
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
                                                      (0, r.jsx)(h.Text, {
                                                          variant: 'text-sm/normal',
                                                          children: e.description
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: 'keybind-shortcuts',
                                                          children: e.binds.map((e) =>
                                                              (0, r.jsx)(
                                                                  h.M2$,
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
class j extends i.PureComponent {
    componentDidMount() {
        (this.lastInputedKeys = []), C.S.subscribe(y.CkL.SCROLL_PAGE_UP, this.scrollPageUp), C.S.subscribe(y.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.addEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        C.S.unsubscribe(y.CkL.SCROLL_PAGE_UP, this.scrollPageUp), C.S.unsubscribe(y.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.removeEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: i } = this.state;
        return (0, r.jsxs)(d.Z.div, {
            className: N.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, r.jsxs)(h.H, {
                    className: N.modalTitle,
                    children: [
                        (0, r.jsx)('div', {
                            className: N.content,
                            children: v.NW.string(v.t['1BdUt7'])
                        }),
                        (0, r.jsx)(h.M2$, { shortcut: 'mod+/' })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: N.modalSubtitle,
                    children: v.NW.string(v.t['2t19lZ'])
                }),
                (0, r.jsxs)('div', {
                    className: N.ddrArrows,
                    children: [
                        (0, r.jsx)(A, {
                            arrow: 'LEFT',
                            isActive: n,
                            className: N.left,
                            children: 'left'
                        }),
                        (0, r.jsx)(A, {
                            arrow: 'DOWN',
                            isActive: t,
                            className: N.down,
                            children: 'down'
                        }),
                        (0, r.jsx)(A, {
                            arrow: 'UP',
                            isActive: e,
                            className: N.up,
                            children: 'up'
                        }),
                        (0, r.jsx)(A, {
                            arrow: 'RIGHT',
                            isActive: i,
                            className: N.right,
                            children: 'right'
                        })
                    ]
                }),
                (0, r.jsx)(h.yWw, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, r.jsx)(h.y5t, { children: (0, r.jsx)(P, {}) })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new d.Z.Value(1),
                scaleX: new d.Z.Value(1),
                scaleY: new d.Z.Value(0),
                animating: !1
            }),
            S(this, 'scrollerRef', i.createRef()),
            S(this, 'lastInputedKeys', []),
            S(this, 'scrollPageUp', () => {
                let e = this.scrollerRef.current;
                a()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({ animate: !0 });
            }),
            S(this, 'scrollPageDown', () => {
                let e = this.scrollerRef.current;
                a()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({ animate: !0 });
            }),
            S(this, 'arrowUp', (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            S(this, 'arrowDown', (e) => {
                let { direction: t } = e;
                x[t](), this.setState({ [t]: !0 });
            }),
            S(this, 'componentWillLeave', (e) => {
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
            S(this, 'toggleOpacity', () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            S(this, 'getStyles', () => ({
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
            S(this, 'handleKeyDown', (e) => {
                if ((this.lastInputedKeys.push(e.keyCode), (this.lastInputedKeys = this.lastInputedKeys.slice(-5)), this.lastInputedKeys[0] === y.yXg.H && this.lastInputedKeys[1] === y.yXg.H && this.lastInputedKeys[2] === y.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === y.yXg.N && this.lastInputedKeys[4] === y.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)) return;
                let t = I(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            S(this, 'handleKeyUp', (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = I(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            S(this, 'onArrowClick', (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function A(e) {
    let { isActive: t, arrow: n, className: o, children: s } = e,
        [a, c] = i.useState(t),
        u = i.useCallback(() => {
            x[n](), c(!0);
        }, [n]);
    return (
        i.useEffect(() => {
            if (a) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [a]),
        (0, r.jsx)(h.P3F, {
            onClick: u,
            className: l()(N.arrow, o, { [N.active]: t || a }),
            children: s
        })
    );
}
function R(e) {
    let { transitionState: t, onClose: n } = e,
        [o, s] = i.useState(!1),
        [a, c] = i.useState(!1),
        u = i.useMemo(() => (__OVERLAY__ ? (0, m.Zg)() : (0, f.Rv)()), []),
        { keyboardModeEnabled: d, useReducedMotion: E } = (0, p.cj)([b.Z], () => ({
            keyboardModeEnabled: b.Z.keyboardModeEnabled,
            useReducedMotion: b.Z.useReducedMotion
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L, { showBackdrop: a }),
            (0, r.jsx)(h.Y0X, {
                className: l()(N.noBackground, { [N.noShadow]: o }),
                size: h.CgR.DYNAMIC,
                'aria-label': v.NW.string(v.t.T9DA2N),
                transitionState: t,
                children: (0, r.jsx)(_.W, {
                    component: 'div',
                    children: o
                        ? (0, r.jsx)(
                              O.Z,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(n, 500);
                                  }
                              },
                              'raging-demo'
                          )
                        : (0, r.jsx)(
                              j,
                              {
                                  content: u,
                                  keyboardModeEnabled: d,
                                  activateRagingDemon: function () {
                                      E || (g.Z.disable(), s(!0), c(!0));
                                  }
                              },
                              'modal'
                          )
                })
            })
        ]
    });
}
