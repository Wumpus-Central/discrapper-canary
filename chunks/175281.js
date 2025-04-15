n.d(t, { Z: () => A }), n(953529), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(512722),
    a = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(748780),
    h = n(442837),
    p = n(215569),
    f = n(481060),
    g = n(612226),
    m = n(951483),
    b = n(714338),
    _ = n(607070),
    y = n(460181),
    v = n(585483),
    O = n(264549),
    C = n(981631),
    S = n(388032),
    j = n(268751);
function E(e, t, n) {
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
    UP: u().throttle(() => (0, y.GN)('ddr-up'), 100),
    DOWN: u().throttle(() => (0, y.GN)('ddr-down'), 100),
    LEFT: u().throttle(() => (0, y.GN)('ddr-left'), 100),
    RIGHT: u().throttle(() => (0, y.GN)('ddr-right'), 100)
};
function N(e) {
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
let I = [g.Q2.MESSAGE, g.Q2.NAVIGATION, g.Q2.VOICE_AND_VIDEO, g.Q2.CHAT, g.Q2.MISCELLANEOUS];
function P(e) {
    let { showBackdrop: t } = e;
    return (0, r.jsx)('div', { className: o()(j.backdrop, { [j.show]: t }) });
}
function w() {
    let e = i.useMemo(
        () =>
            u()((0, g.Rv)())
                .groupBy((e) => e.group)
                .value(),
        []
    );
    return (0, r.jsx)('div', {
        className: j.keyboardShortcutList,
        children: I.map((t) => {
            let n = e[t],
                i = (0, g.UD)(t),
                l = (0, g.U6)(t);
            return (0, r.jsxs)(
                'div',
                {
                    className: j.keyboardShortcutSection,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(f.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: i
                                }),
                                null != l &&
                                    (0, r.jsx)(f.Text, {
                                        className: j.keybindGroupDescription,
                                        variant: 'text-sm/normal',
                                        children: l
                                    })
                            ]
                        }),
                        (0, r.jsx)(
                            'div',
                            {
                                className: j.keyboardShortcutListGroup,
                                children: n.map((e, t) => {
                                    var n;
                                    return (null == (n = e.predicate) ? void 0 : n.call(e)) === !1
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: j.keybindGroup,
                                                  children: [
                                                      (0, r.jsx)(f.Text, {
                                                          variant: 'text-sm/normal',
                                                          children: e.description
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: 'keybind-shortcuts',
                                                          children: e.binds.map((e) =>
                                                              (0, r.jsx)(
                                                                  f.M2$,
                                                                  {
                                                                      className: j.keybindKey,
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
class Z extends i.PureComponent {
    componentDidMount() {
        (this.lastInputedKeys = []), v.S.subscribe(C.CkL.SCROLL_PAGE_UP, this.scrollPageUp), v.S.subscribe(C.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.addEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        v.S.unsubscribe(C.CkL.SCROLL_PAGE_UP, this.scrollPageUp), v.S.unsubscribe(C.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.removeEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: i } = this.state;
        return (0, r.jsxs)(d.Z.div, {
            className: j.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, r.jsxs)(f.H, {
                    className: j.modalTitle,
                    children: [
                        (0, r.jsx)('div', {
                            className: j.content,
                            children: S.NW.string(S.t['1BdUt7'])
                        }),
                        (0, r.jsx)(f.M2$, { shortcut: 'mod+/' })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: j.modalSubtitle,
                    children: S.NW.string(S.t['2t19lZ'])
                }),
                (0, r.jsxs)('div', {
                    className: j.ddrArrows,
                    children: [
                        (0, r.jsx)(T, {
                            arrow: 'LEFT',
                            isActive: n,
                            className: j.left,
                            children: 'left'
                        }),
                        (0, r.jsx)(T, {
                            arrow: 'DOWN',
                            isActive: t,
                            className: j.down,
                            children: 'down'
                        }),
                        (0, r.jsx)(T, {
                            arrow: 'UP',
                            isActive: e,
                            className: j.up,
                            children: 'up'
                        }),
                        (0, r.jsx)(T, {
                            arrow: 'RIGHT',
                            isActive: i,
                            className: j.right,
                            children: 'right'
                        })
                    ]
                }),
                (0, r.jsx)(f.yWw, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, r.jsx)(f.y5t, { children: (0, r.jsx)(w, {}) })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new d.Z.Value(1),
                scaleX: new d.Z.Value(1),
                scaleY: new d.Z.Value(0),
                animating: !1
            }),
            E(this, 'scrollerRef', i.createRef()),
            E(this, 'lastInputedKeys', []),
            E(this, 'scrollPageUp', () => {
                let e = this.scrollerRef.current;
                a()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({ animate: !0 });
            }),
            E(this, 'scrollPageDown', () => {
                let e = this.scrollerRef.current;
                a()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({ animate: !0 });
            }),
            E(this, 'arrowUp', (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            E(this, 'arrowDown', (e) => {
                let { direction: t } = e;
                x[t](), this.setState({ [t]: !0 });
            }),
            E(this, 'componentWillLeave', (e) => {
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
            E(this, 'toggleOpacity', () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            E(this, 'getStyles', () => ({
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
            E(this, 'handleKeyDown', (e) => {
                if ((this.lastInputedKeys.push(e.keyCode), (this.lastInputedKeys = this.lastInputedKeys.slice(-5)), this.lastInputedKeys[0] === C.yXg.H && this.lastInputedKeys[1] === C.yXg.H && this.lastInputedKeys[2] === C.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === C.yXg.N && this.lastInputedKeys[4] === C.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)) return;
                let t = N(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            E(this, 'handleKeyUp', (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = N(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            E(this, 'onArrowClick', (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function T(e) {
    let { isActive: t, arrow: n, className: l, children: s } = e,
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
        (0, r.jsx)(f.P3F, {
            onClick: u,
            className: o()(j.arrow, l, { [j.active]: t || a }),
            children: s
        })
    );
}
function A(e) {
    let { transitionState: t, onClose: n } = e,
        [l, s] = i.useState(!1),
        [a, c] = i.useState(!1),
        u = i.useMemo(() => (__OVERLAY__ ? (0, m.Zg)() : (0, g.Rv)()), []),
        { keyboardModeEnabled: d, useReducedMotion: y } = (0, h.cj)([_.Z], () => ({
            keyboardModeEnabled: _.Z.keyboardModeEnabled,
            useReducedMotion: _.Z.useReducedMotion
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P, { showBackdrop: a }),
            (0, r.jsx)(f.Y0X, {
                className: o()(j.noBackground, { [j.noShadow]: l }),
                size: f.CgR.DYNAMIC,
                'aria-label': S.NW.string(S.t.T9DA2N),
                transitionState: t,
                children: (0, r.jsx)(p.W, {
                    component: 'div',
                    children: l
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
                              Z,
                              {
                                  content: u,
                                  keyboardModeEnabled: d,
                                  activateRagingDemon: function () {
                                      y || (b.Z.disable(), s(!0), c(!0));
                                  }
                              },
                              'modal'
                          )
                })
            })
        ]
    });
}
