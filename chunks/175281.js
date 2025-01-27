s.d(t, {
    Z: function () {
        return U;
    }
}),
    s(47120),
    s(653041);
var n,
    i,
    r = s(200651),
    o = s(192379),
    l = s(120356),
    a = s.n(l),
    c = s(512722),
    d = s.n(c),
    u = s(392711),
    h = s.n(u),
    E = s(748780),
    p = s(442837),
    _ = s(215569),
    m = s(481060),
    g = s(612226),
    C = s(951483),
    N = s(714338),
    f = s(607070),
    b = s(585483),
    I = s(557177),
    R = s(264549),
    S = s(981631),
    T = s(388032),
    x = s(521287);
function M(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
((i = n || (n = {})).UP = 'UP'), (i.DOWN = 'DOWN'), (i.LEFT = 'LEFT'), (i.RIGHT = 'RIGHT');
let y = {
    UP: h().throttle(() => (0, I.GN)('ddr-up'), 100),
    DOWN: h().throttle(() => (0, I.GN)('ddr-down'), 100),
    LEFT: h().throttle(() => (0, I.GN)('ddr-left'), 100),
    RIGHT: h().throttle(() => (0, I.GN)('ddr-right'), 100)
};
function A(e) {
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
let O = [g.Q2.MESSAGE, g.Q2.NAVIGATION, g.Q2.VOICE_AND_VIDEO, g.Q2.CHAT, g.Q2.MISCELLANEOUS];
function P(e) {
    let { showBackdrop: t } = e;
    return (0, r.jsx)('div', { className: a()(x.backdrop, { [x.show]: t }) });
}
function L() {
    let e = o.useMemo(
        () =>
            h()((0, g.Rv)())
                .groupBy((e) => e.group)
                .value(),
        []
    );
    return (0, r.jsx)('div', {
        className: x.keyboardShortcutList,
        children: O.map((t) => {
            let s = e[t],
                n = (0, g.UD)(t),
                i = (0, g.U6)(t);
            return (0, r.jsxs)(
                'div',
                {
                    className: x.keyboardShortcutSection,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(m.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: n
                                }),
                                null != i &&
                                    (0, r.jsx)(m.Text, {
                                        className: x.keybindGroupDescription,
                                        variant: 'text-sm/normal',
                                        children: i
                                    })
                            ]
                        }),
                        (0, r.jsx)(
                            'div',
                            {
                                className: x.keyboardShortcutListGroup,
                                children: s.map((e, t) => {
                                    var s;
                                    return (null === (s = e.predicate) || void 0 === s ? void 0 : s.call(e)) === !1
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: a()(x.keybindGroup),
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
                                                                      className: x.keybindKey,
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
        (this.lastInputedKeys = []), b.S.subscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp), b.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.addEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        b.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp), b.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.removeEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: s, RIGHT: n } = this.state;
        return (0, r.jsxs)(E.Z.div, {
            className: x.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, r.jsxs)(m.H, {
                    className: x.modalTitle,
                    children: [
                        (0, r.jsx)('div', {
                            className: x.content,
                            children: T.intl.string(T.t['1BdUt7'])
                        }),
                        (0, r.jsx)(m.KeyCombo, { shortcut: 'mod+/' })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: x.modalSubtitle,
                    children: T.intl.string(T.t['2t19lZ'])
                }),
                (0, r.jsxs)('div', {
                    className: x.ddrArrows,
                    children: [
                        (0, r.jsx)(D, {
                            arrow: 'LEFT',
                            isActive: s,
                            className: x.left,
                            children: 'left'
                        }),
                        (0, r.jsx)(D, {
                            arrow: 'DOWN',
                            isActive: t,
                            className: x.down,
                            children: 'down'
                        }),
                        (0, r.jsx)(D, {
                            arrow: 'UP',
                            isActive: e,
                            className: x.up,
                            children: 'up'
                        }),
                        (0, r.jsx)(D, {
                            arrow: 'RIGHT',
                            isActive: n,
                            className: x.right,
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
            M(this, 'state', {
                UP: !1,
                DOWN: !1,
                LEFT: !1,
                RIGHT: !1,
                opacity: new E.Z.Value(1),
                scaleX: new E.Z.Value(1),
                scaleY: new E.Z.Value(0),
                animating: !1
            }),
            M(this, 'scrollerRef', o.createRef()),
            M(this, 'lastInputedKeys', []),
            M(this, 'scrollPageUp', () => {
                let e = this.scrollerRef.current;
                d()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({ animate: !0 });
            }),
            M(this, 'scrollPageDown', () => {
                let e = this.scrollerRef.current;
                d()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({ animate: !0 });
            }),
            M(this, 'arrowUp', (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            M(this, 'arrowDown', (e) => {
                let { direction: t } = e;
                y[t](), this.setState({ [t]: !0 });
            }),
            M(this, 'componentWillLeave', (e) => {
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
            M(this, 'toggleOpacity', () => {
                1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
            }),
            M(this, 'getStyles', () => ({
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
            M(this, 'handleKeyDown', (e) => {
                if ((this.lastInputedKeys.push(e.keyCode), (this.lastInputedKeys = this.lastInputedKeys.slice(-5)), this.lastInputedKeys[0] === S.yXg.H && this.lastInputedKeys[1] === S.yXg.H && this.lastInputedKeys[2] === S.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === S.yXg.N && this.lastInputedKeys[4] === S.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)) return;
                let t = A(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            M(this, 'handleKeyUp', (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = A(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            M(this, 'onArrowClick', (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function D(e) {
    let { isActive: t, arrow: s, className: n, children: i } = e,
        [l, c] = o.useState(t),
        d = o.useCallback(() => {
            y[s](), c(!0);
        }, [s]);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsx)(m.Clickable, {
            onClick: d,
            className: a()(x.arrow, n, { [x.active]: t || l }),
            children: i
        })
    );
}
function U(e) {
    let { transitionState: t, onClose: s } = e,
        [n, i] = o.useState(!1),
        [l, c] = o.useState(!1),
        d = o.useMemo(() => (__OVERLAY__ ? (0, C.Zg)() : (0, g.Rv)()), []),
        { keyboardModeEnabled: u, useReducedMotion: h } = (0, p.cj)([f.Z], () => ({
            keyboardModeEnabled: f.Z.keyboardModeEnabled,
            useReducedMotion: f.Z.useReducedMotion
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P, { showBackdrop: l }),
            (0, r.jsx)(m.ModalRoot, {
                className: a()(x.noBackground, { [x.noShadow]: n }),
                size: m.ModalSize.DYNAMIC,
                'aria-label': T.intl.string(T.t.T9DA2N),
                transitionState: t,
                children: (0, r.jsx)(_.W, {
                    component: 'div',
                    children: n
                        ? (0, r.jsx)(
                              R.Z,
                              {
                                  handleDemonClose: function () {
                                      c(!1), setTimeout(s, 500);
                                  }
                              },
                              'raging-demo'
                          )
                        : (0, r.jsx)(
                              v,
                              {
                                  content: d,
                                  keyboardModeEnabled: u,
                                  activateRagingDemon: function () {
                                      !h && (N.Z.disable(), i(!0), c(!0));
                                  }
                              },
                              'modal'
                          )
                })
            })
        ]
    });
}
