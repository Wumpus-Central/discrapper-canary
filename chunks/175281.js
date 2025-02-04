n.d(t, { Z: () => v }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(512722),
    a = n.n(o),
    c = n(392711),
    d = n.n(c),
    u = n(748780),
    _ = n(442837),
    E = n(215569),
    h = n(481060),
    p = n(612226),
    I = n(951483),
    m = n(714338),
    T = n(607070),
    C = n(585483),
    N = n(557177),
    g = n(264549),
    S = n(981631),
    f = n(388032),
    R = n(521287);
function A(e, t, n) {
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
let O = {
    UP: d().throttle(() => (0, N.GN)('ddr-up'), 100),
    DOWN: d().throttle(() => (0, N.GN)('ddr-down'), 100),
    LEFT: d().throttle(() => (0, N.GN)('ddr-left'), 100),
    RIGHT: d().throttle(() => (0, N.GN)('ddr-right'), 100)
};
function L(e) {
    switch (e.keyCode) {
        case S.yXg.ARROW_UP:
            return 'UP';
        case S.yXg.ARROW_DOWN:
            return 'DOWN';
        case S.yXg.ARROW_LEFT:
            return 'LEFT';
        case S.yXg.ARROW_RIGHT:
            return 'RIGHT';
        default:
            return null;
    }
}
let P = [p.Q2.MESSAGE, p.Q2.NAVIGATION, p.Q2.VOICE_AND_VIDEO, p.Q2.CHAT, p.Q2.MISCELLANEOUS];
function x(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)('div', { className: s()(R.backdrop, { [R.show]: t }) });
}
function b() {
    let e = l.useMemo(
        () =>
            d()((0, p.Rv)())
                .groupBy((e) => e.group)
                .value(),
        []
    );
    return (0, i.jsx)('div', {
        className: R.keyboardShortcutList,
        children: P.map((t) => {
            let n = e[t],
                l = (0, p.UD)(t),
                r = (0, p.U6)(t);
            return (0, i.jsxs)(
                'div',
                {
                    className: R.keyboardShortcutSection,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(h.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: l
                                }),
                                null != r &&
                                    (0, i.jsx)(h.Text, {
                                        className: R.keybindGroupDescription,
                                        variant: 'text-sm/normal',
                                        children: r
                                    })
                            ]
                        }),
                        (0, i.jsx)(
                            'div',
                            {
                                className: R.keyboardShortcutListGroup,
                                children: n.map((e, t) => {
                                    var n;
                                    return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1
                                        ? null
                                        : (0, i.jsxs)(
                                              'div',
                                              {
                                                  className: s()(R.keybindGroup),
                                                  children: [
                                                      (0, i.jsx)(h.Text, {
                                                          variant: 'text-sm/normal',
                                                          children: e.description
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: 'keybind-shortcuts',
                                                          children: e.binds.map((e) =>
                                                              (0, i.jsx)(
                                                                  h.M2$,
                                                                  {
                                                                      className: R.keybindKey,
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
class D extends l.PureComponent {
    componentDidMount() {
        (this.lastInputedKeys = []), C.S.subscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp), C.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.addEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        C.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp), C.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.removeEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: l } = this.state;
        return (0, i.jsxs)(u.Z.div, {
            className: R.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(h.H, {
                    className: R.modalTitle,
                    children: [
                        (0, i.jsx)('div', {
                            className: R.content,
                            children: f.intl.string(f.t['1BdUt7'])
                        }),
                        (0, i.jsx)(h.M2$, { shortcut: 'mod+/' })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: R.modalSubtitle,
                    children: f.intl.string(f.t['2t19lZ'])
                }),
                (0, i.jsxs)('div', {
                    className: R.ddrArrows,
                    children: [
                        (0, i.jsx)(M, {
                            arrow: 'LEFT',
                            isActive: n,
                            className: R.left,
                            children: 'left'
                        }),
                        (0, i.jsx)(M, {
                            arrow: 'DOWN',
                            isActive: t,
                            className: R.down,
                            children: 'down'
                        }),
                        (0, i.jsx)(M, {
                            arrow: 'UP',
                            isActive: e,
                            className: R.up,
                            children: 'up'
                        }),
                        (0, i.jsx)(M, {
                            arrow: 'RIGHT',
                            isActive: l,
                            className: R.right,
                            children: 'right'
                        })
                    ]
                }),
                (0, i.jsx)(h.yWw, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(h.y5t, { children: (0, i.jsx)(b, {}) })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new u.Z.Value(1),
                scaleX: new u.Z.Value(1),
                scaleY: new u.Z.Value(0),
                animating: !1
            }),
            A(this, 'scrollerRef', l.createRef()),
            A(this, 'lastInputedKeys', []),
            A(this, 'scrollPageUp', () => {
                let e = this.scrollerRef.current;
                a()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({ animate: !0 });
            }),
            A(this, 'scrollPageDown', () => {
                let e = this.scrollerRef.current;
                a()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({ animate: !0 });
            }),
            A(this, 'arrowUp', (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            A(this, 'arrowDown', (e) => {
                let { direction: t } = e;
                O[t](), this.setState({ [t]: !0 });
            }),
            A(this, 'componentWillLeave', (e) => {
                this.setState({ animating: !0 }),
                    this.state.opacity.setValue(1),
                    this.state.scaleX.setValue(0.5),
                    this.state.scaleY.setValue(1),
                    u.Z.sequence([
                        u.Z.timing(this.state.opacity, {
                            toValue: 0,
                            duration: 800,
                            easing: u.Z.Easing.cubic
                        })
                    ]).start(e);
            }),
            A(this, 'toggleOpacity', () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            A(this, 'getStyles', () => ({
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
            A(this, 'handleKeyDown', (e) => {
                if ((this.lastInputedKeys.push(e.keyCode), (this.lastInputedKeys = this.lastInputedKeys.slice(-5)), this.lastInputedKeys[0] === S.yXg.H && this.lastInputedKeys[1] === S.yXg.H && this.lastInputedKeys[2] === S.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === S.yXg.N && this.lastInputedKeys[4] === S.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)) return;
                let t = L(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            A(this, 'handleKeyUp', (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = L(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            A(this, 'onArrowClick', (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function M(e) {
    let { isActive: t, arrow: n, className: r, children: o } = e,
        [a, c] = l.useState(t),
        d = l.useCallback(() => {
            O[n](), c(!0);
        }, [n]);
    return (
        l.useEffect(() => {
            if (a) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [a]),
        (0, i.jsx)(h.P3F, {
            onClick: d,
            className: s()(R.arrow, r, { [R.active]: t || a }),
            children: o
        })
    );
}
function v(e) {
    let { transitionState: t, onClose: n } = e,
        [r, o] = l.useState(!1),
        [a, c] = l.useState(!1),
        d = l.useMemo(() => (__OVERLAY__ ? (0, I.Zg)() : (0, p.Rv)()), []),
        { keyboardModeEnabled: u, useReducedMotion: C } = (0, _.cj)([T.Z], () => ({
            keyboardModeEnabled: T.Z.keyboardModeEnabled,
            useReducedMotion: T.Z.useReducedMotion
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x, { showBackdrop: a }),
            (0, i.jsx)(h.Y0X, {
                className: s()(R.noBackground, { [R.noShadow]: r }),
                size: h.CgR.DYNAMIC,
                'aria-label': f.intl.string(f.t.T9DA2N),
                transitionState: t,
                children: (0, i.jsx)(E.W, {
                    component: 'div',
                    children: r
                        ? (0, i.jsx)(
                              g.Z,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(n, 500);
                                  }
                              },
                              'raging-demo'
                          )
                        : (0, i.jsx)(
                              D,
                              {
                                  content: d,
                                  keyboardModeEnabled: u,
                                  activateRagingDemon: function () {
                                      C || (m.Z.disable(), o(!0), c(!0));
                                  }
                              },
                              'modal'
                          )
                })
            })
        ]
    });
}
