n.d(t, { Z: () => U }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(392711),
    d = n.n(c),
    u = n(748780),
    E = n(442837),
    _ = n(215569),
    h = n(481060),
    I = n(612226),
    C = n(951483),
    T = n(714338),
    N = n(607070),
    m = n(460181),
    p = n(585483),
    S = n(264549),
    R = n(981631),
    A = n(388032),
    g = n(542667);
function O(e, t, n) {
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
let f = {
    UP: d().throttle(() => (0, m.GN)('ddr-up'), 100),
    DOWN: d().throttle(() => (0, m.GN)('ddr-down'), 100),
    LEFT: d().throttle(() => (0, m.GN)('ddr-left'), 100),
    RIGHT: d().throttle(() => (0, m.GN)('ddr-right'), 100)
};
function P(e) {
    switch (e.keyCode) {
        case R.yXg.ARROW_UP:
            return 'UP';
        case R.yXg.ARROW_DOWN:
            return 'DOWN';
        case R.yXg.ARROW_LEFT:
            return 'LEFT';
        case R.yXg.ARROW_RIGHT:
            return 'RIGHT';
        default:
            return null;
    }
}
let L = [I.Q2.MESSAGE, I.Q2.NAVIGATION, I.Q2.VOICE_AND_VIDEO, I.Q2.CHAT, I.Q2.MISCELLANEOUS];
function D(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)('div', { className: s()(g.backdrop, { [g.show]: t }) });
}
function M() {
    let e = l.useMemo(
        () =>
            d()((0, I.Rv)())
                .groupBy((e) => e.group)
                .value(),
        []
    );
    return (0, i.jsx)('div', {
        className: g.keyboardShortcutList,
        children: L.map((t) => {
            let n = e[t],
                l = (0, I.UD)(t),
                r = (0, I.U6)(t);
            return (0, i.jsxs)(
                'div',
                {
                    className: g.keyboardShortcutSection,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(h.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: l
                                }),
                                null != r &&
                                    (0, i.jsx)(h.Text, {
                                        className: g.keybindGroupDescription,
                                        variant: 'text-sm/normal',
                                        children: r
                                    })
                            ]
                        }),
                        (0, i.jsx)(
                            'div',
                            {
                                className: g.keyboardShortcutListGroup,
                                children: n.map((e, t) => {
                                    var n;
                                    return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1
                                        ? null
                                        : (0, i.jsxs)(
                                              'div',
                                              {
                                                  className: s()(g.keybindGroup),
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
                                                                      className: g.keybindKey,
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
class v extends l.PureComponent {
    componentDidMount() {
        (this.lastInputedKeys = []), p.S.subscribe(R.CkL.SCROLL_PAGE_UP, this.scrollPageUp), p.S.subscribe(R.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.addEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        p.S.unsubscribe(R.CkL.SCROLL_PAGE_UP, this.scrollPageUp), p.S.unsubscribe(R.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.removeEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: l } = this.state;
        return (0, i.jsxs)(u.Z.div, {
            className: g.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(h.H, {
                    className: g.modalTitle,
                    children: [
                        (0, i.jsx)('div', {
                            className: g.content,
                            children: A.intl.string(A.t['1BdUt7'])
                        }),
                        (0, i.jsx)(h.M2$, { shortcut: 'mod+/' })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: g.modalSubtitle,
                    children: A.intl.string(A.t['2t19lZ'])
                }),
                (0, i.jsxs)('div', {
                    className: g.ddrArrows,
                    children: [
                        (0, i.jsx)(Z, {
                            arrow: 'LEFT',
                            isActive: n,
                            className: g.left,
                            children: 'left'
                        }),
                        (0, i.jsx)(Z, {
                            arrow: 'DOWN',
                            isActive: t,
                            className: g.down,
                            children: 'down'
                        }),
                        (0, i.jsx)(Z, {
                            arrow: 'UP',
                            isActive: e,
                            className: g.up,
                            children: 'up'
                        }),
                        (0, i.jsx)(Z, {
                            arrow: 'RIGHT',
                            isActive: l,
                            className: g.right,
                            children: 'right'
                        })
                    ]
                }),
                (0, i.jsx)(h.yWw, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(h.y5t, { children: (0, i.jsx)(M, {}) })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            O(this, 'state', {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new u.Z.Value(1),
                scaleX: new u.Z.Value(1),
                scaleY: new u.Z.Value(0),
                animating: !1
            }),
            O(this, 'scrollerRef', l.createRef()),
            O(this, 'lastInputedKeys', []),
            O(this, 'scrollPageUp', () => {
                let e = this.scrollerRef.current;
                o()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({ animate: !0 });
            }),
            O(this, 'scrollPageDown', () => {
                let e = this.scrollerRef.current;
                o()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({ animate: !0 });
            }),
            O(this, 'arrowUp', (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            O(this, 'arrowDown', (e) => {
                let { direction: t } = e;
                f[t](), this.setState({ [t]: !0 });
            }),
            O(this, 'componentWillLeave', (e) => {
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
            O(this, 'toggleOpacity', () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            O(this, 'getStyles', () => ({
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
            O(this, 'handleKeyDown', (e) => {
                if ((this.lastInputedKeys.push(e.keyCode), (this.lastInputedKeys = this.lastInputedKeys.slice(-5)), this.lastInputedKeys[0] === R.yXg.H && this.lastInputedKeys[1] === R.yXg.H && this.lastInputedKeys[2] === R.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === R.yXg.N && this.lastInputedKeys[4] === R.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)) return;
                let t = P(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            O(this, 'handleKeyUp', (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = P(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            O(this, 'onArrowClick', (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function Z(e) {
    let { isActive: t, arrow: n, className: r, children: a } = e,
        [o, c] = l.useState(t),
        d = l.useCallback(() => {
            f[n](), c(!0);
        }, [n]);
    return (
        l.useEffect(() => {
            if (o) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [o]),
        (0, i.jsx)(h.P3F, {
            onClick: d,
            className: s()(g.arrow, r, { [g.active]: t || o }),
            children: a
        })
    );
}
function U(e) {
    let { transitionState: t, onClose: n } = e,
        [r, a] = l.useState(!1),
        [o, c] = l.useState(!1),
        d = l.useMemo(() => (__OVERLAY__ ? (0, C.Zg)() : (0, I.Rv)()), []),
        { keyboardModeEnabled: u, useReducedMotion: m } = (0, E.cj)([N.Z], () => ({
            keyboardModeEnabled: N.Z.keyboardModeEnabled,
            useReducedMotion: N.Z.useReducedMotion
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(D, { showBackdrop: o }),
            (0, i.jsx)(h.Y0X, {
                className: s()(g.noBackground, { [g.noShadow]: r }),
                size: h.CgR.DYNAMIC,
                'aria-label': A.intl.string(A.t.T9DA2N),
                transitionState: t,
                children: (0, i.jsx)(_.W, {
                    component: 'div',
                    children: r
                        ? (0, i.jsx)(
                              S.Z,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(n, 500);
                                  }
                              },
                              'raging-demo'
                          )
                        : (0, i.jsx)(
                              v,
                              {
                                  content: d,
                                  keyboardModeEnabled: u,
                                  activateRagingDemon: function () {
                                      m || (T.Z.disable(), a(!0), c(!0));
                                  }
                              },
                              'modal'
                          )
                })
            })
        ]
    });
}
