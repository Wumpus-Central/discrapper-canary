n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120),
    n(653041);
var s,
    i,
    r = n(200651),
    o = n(192379),
    l = n(120356),
    a = n.n(l),
    c = n(512722),
    u = n.n(c),
    d = n(392711),
    h = n.n(d),
    E = n(748780),
    p = n(442837),
    _ = n(215569),
    m = n(481060),
    C = n(612226),
    N = n(951483),
    g = n(714338),
    f = n(607070),
    R = n(585483),
    b = n(557177),
    I = n(264549),
    T = n(981631),
    S = n(388032),
    O = n(521287);
function x(e, t, n) {
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
((i = s || (s = {})).UP = 'UP'), (i.DOWN = 'DOWN'), (i.LEFT = 'LEFT'), (i.RIGHT = 'RIGHT');
let A = {
    UP: h().throttle(() => (0, b.GN)('ddr-up'), 100),
    DOWN: h().throttle(() => (0, b.GN)('ddr-down'), 100),
    LEFT: h().throttle(() => (0, b.GN)('ddr-left'), 100),
    RIGHT: h().throttle(() => (0, b.GN)('ddr-right'), 100)
};
function y(e) {
    switch (e.keyCode) {
        case T.yXg.ARROW_UP:
            return 'UP';
        case T.yXg.ARROW_DOWN:
            return 'DOWN';
        case T.yXg.ARROW_LEFT:
            return 'LEFT';
        case T.yXg.ARROW_RIGHT:
            return 'RIGHT';
        default:
            return null;
    }
}
let M = [C.Q2.MESSAGE, C.Q2.NAVIGATION, C.Q2.VOICE_AND_VIDEO, C.Q2.CHAT, C.Q2.MISCELLANEOUS];
function P(e) {
    let { showBackdrop: t } = e;
    return (0, r.jsx)('div', { className: a()(O.backdrop, { [O.show]: t }) });
}
function L() {
    let e = o.useMemo(
        () =>
            h()((0, C.Rv)())
                .groupBy((e) => e.group)
                .value(),
        []
    );
    return (0, r.jsx)('div', {
        className: O.keyboardShortcutList,
        children: M.map((t) => {
            let n = e[t],
                s = (0, C.UD)(t),
                i = (0, C.U6)(t);
            return (0, r.jsxs)(
                'div',
                {
                    className: O.keyboardShortcutSection,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(m.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: s
                                }),
                                null != i &&
                                    (0, r.jsx)(m.Text, {
                                        className: O.keybindGroupDescription,
                                        variant: 'text-sm/normal',
                                        children: i
                                    })
                            ]
                        }),
                        (0, r.jsx)(
                            'div',
                            {
                                className: O.keyboardShortcutListGroup,
                                children: n.map((e, t) => {
                                    var n;
                                    return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: a()(O.keybindGroup),
                                                  children: [
                                                      (0, r.jsx)(m.Text, {
                                                          variant: 'text-sm/normal',
                                                          children: e.description
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: 'keybind-shortcuts',
                                                          children: e.binds.map((e) =>
                                                              (0, r.jsx)(
                                                                  m.KeyCombo,
                                                                  {
                                                                      className: O.keybindKey,
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
class v extends o.PureComponent {
    componentDidMount() {
        (this.lastInputedKeys = []), R.S.subscribe(T.CkL.SCROLL_PAGE_UP, this.scrollPageUp), R.S.subscribe(T.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.addEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        R.S.unsubscribe(T.CkL.SCROLL_PAGE_UP, this.scrollPageUp), R.S.unsubscribe(T.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.removeEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: s } = this.state;
        return (0, r.jsxs)(E.Z.div, {
            className: O.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, r.jsxs)(m.H, {
                    className: O.modalTitle,
                    children: [
                        (0, r.jsx)('div', {
                            className: O.content,
                            children: S.intl.string(S.t['1BdUt7'])
                        }),
                        (0, r.jsx)(m.KeyCombo, { shortcut: 'mod+/' })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: O.modalSubtitle,
                    children: S.intl.string(S.t['2t19lZ'])
                }),
                (0, r.jsxs)('div', {
                    className: O.ddrArrows,
                    children: [
                        (0, r.jsx)(D, {
                            arrow: 'LEFT',
                            isActive: n,
                            className: O.left,
                            children: 'left'
                        }),
                        (0, r.jsx)(D, {
                            arrow: 'DOWN',
                            isActive: t,
                            className: O.down,
                            children: 'down'
                        }),
                        (0, r.jsx)(D, {
                            arrow: 'UP',
                            isActive: e,
                            className: O.up,
                            children: 'up'
                        }),
                        (0, r.jsx)(D, {
                            arrow: 'RIGHT',
                            isActive: s,
                            className: O.right,
                            children: 'right'
                        })
                    ]
                }),
                (0, r.jsx)(m.AdvancedScrollerAuto, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, r.jsx)(m.HeadingLevel, { children: (0, r.jsx)(L, {}) })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new E.Z.Value(1),
                scaleX: new E.Z.Value(1),
                scaleY: new E.Z.Value(0),
                animating: !1
            }),
            x(this, 'scrollerRef', o.createRef()),
            x(this, 'lastInputedKeys', []),
            x(this, 'scrollPageUp', () => {
                let e = this.scrollerRef.current;
                u()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({ animate: !0 });
            }),
            x(this, 'scrollPageDown', () => {
                let e = this.scrollerRef.current;
                u()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({ animate: !0 });
            }),
            x(this, 'arrowUp', (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            x(this, 'arrowDown', (e) => {
                let { direction: t } = e;
                A[t](), this.setState({ [t]: !0 });
            }),
            x(this, 'componentWillLeave', (e) => {
                this.setState({ animating: !0 }),
                    this.state.opacity.setValue(1),
                    this.state.scaleX.setValue(0.5),
                    this.state.scaleY.setValue(1),
                    E.Z.sequence([
                        E.Z.timing(this.state.opacity, {
                            toValue: 0,
                            duration: 800,
                            easing: E.Z.Easing.cubic
                        })
                    ]).start(e);
            }),
            x(this, 'toggleOpacity', () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            x(this, 'getStyles', () => ({
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
            x(this, 'handleKeyDown', (e) => {
                if ((this.lastInputedKeys.push(e.keyCode), (this.lastInputedKeys = this.lastInputedKeys.slice(-5)), this.lastInputedKeys[0] === T.yXg.H && this.lastInputedKeys[1] === T.yXg.H && this.lastInputedKeys[2] === T.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === T.yXg.N && this.lastInputedKeys[4] === T.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)) return;
                let t = y(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            x(this, 'handleKeyUp', (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = y(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            x(this, 'onArrowClick', (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function D(e) {
    let { isActive: t, arrow: n, className: s, children: i } = e,
        [l, c] = o.useState(t),
        u = o.useCallback(() => {
            A[n](), c(!0);
        }, [n]);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsx)(m.Clickable, {
            onClick: u,
            className: a()(O.arrow, s, { [O.active]: t || l }),
            children: i
        })
    );
}
function Z(e) {
    let { transitionState: t, onClose: n } = e,
        [s, i] = o.useState(!1),
        [l, c] = o.useState(!1),
        u = o.useMemo(() => (__OVERLAY__ ? (0, N.Zg)() : (0, C.Rv)()), []),
        { keyboardModeEnabled: d, useReducedMotion: h } = (0, p.cj)([f.Z], () => ({
            keyboardModeEnabled: f.Z.keyboardModeEnabled,
            useReducedMotion: f.Z.useReducedMotion
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P, { showBackdrop: l }),
            (0, r.jsx)(m.ModalRoot, {
                className: a()(O.noBackground, { [O.noShadow]: s }),
                size: m.ModalSize.DYNAMIC,
                'aria-label': S.intl.string(S.t.T9DA2N),
                transitionState: t,
                children: (0, r.jsx)(_.W, {
                    component: 'div',
                    children: s
                        ? (0, r.jsx)(
                              I.Z,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(n, 500);
                                  }
                              },
                              'raging-demo'
                          )
                        : (0, r.jsx)(
                              v,
                              {
                                  content: u,
                                  keyboardModeEnabled: d,
                                  activateRagingDemon: function () {
                                      !h && (g.Z.disable(), i(!0), c(!0));
                                  }
                              },
                              'modal'
                          )
                })
            })
        ]
    });
}
