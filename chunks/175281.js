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
    a = s(120356),
    l = s.n(a),
    c = s(512722),
    d = s.n(c),
    u = s(392711),
    h = s.n(u),
    E = s(748780),
    p = s(442837),
    m = s(215569),
    _ = s(481060),
    C = s(612226),
    g = s(951483),
    N = s(714338),
    f = s(607070),
    b = s(585483),
    R = s(557177),
    I = s(264549),
    S = s(981631),
    T = s(388032),
    O = s(521287);
function x(e, t, s) {
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
    UP: h().throttle(() => (0, R.GN)('ddr-up'), 100),
    DOWN: h().throttle(() => (0, R.GN)('ddr-down'), 100),
    LEFT: h().throttle(() => (0, R.GN)('ddr-left'), 100),
    RIGHT: h().throttle(() => (0, R.GN)('ddr-right'), 100)
};
function M(e) {
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
let A = [C.Q2.MESSAGE, C.Q2.NAVIGATION, C.Q2.VOICE_AND_VIDEO, C.Q2.CHAT, C.Q2.MISCELLANEOUS];
function L(e) {
    let { showBackdrop: t } = e;
    return (0, r.jsx)('div', { className: l()(O.backdrop, { [O.show]: t }) });
}
function P() {
    let e = o.useMemo(
        () =>
            h()((0, C.Rv)())
                .groupBy((e) => e.group)
                .value(),
        []
    );
    return (0, r.jsx)('div', {
        className: O.keyboardShortcutList,
        children: A.map((t) => {
            let s = e[t],
                n = (0, C.UD)(t),
                i = (0, C.U6)(t);
            return (0, r.jsxs)(
                'div',
                {
                    className: O.keyboardShortcutSection,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(_.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: n
                                }),
                                null != i &&
                                    (0, r.jsx)(_.Text, {
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
                                children: s.map((e, t) => {
                                    var s;
                                    return (null === (s = e.predicate) || void 0 === s ? void 0 : s.call(e)) === !1
                                        ? null
                                        : (0, r.jsxs)(
                                              'div',
                                              {
                                                  className: l()(O.keybindGroup),
                                                  children: [
                                                      (0, r.jsx)(_.Text, {
                                                          variant: 'text-sm/normal',
                                                          children: e.description
                                                      }),
                                                      (0, r.jsx)('div', {
                                                          className: 'keybind-shortcuts',
                                                          children: e.binds.map((e) =>
                                                              (0, r.jsx)(
                                                                  _.KeyCombo,
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
        (this.lastInputedKeys = []), b.S.subscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp), b.S.subscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.addEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        b.S.unsubscribe(S.CkL.SCROLL_PAGE_UP, this.scrollPageUp), b.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener('keydown', this.handleKeyDown, { capture: !0 }), window.removeEventListener('keyup', this.handleKeyUp, { capture: !0 });
    }
    render() {
        let { UP: e, DOWN: t, LEFT: s, RIGHT: n } = this.state;
        return (0, r.jsxs)(E.Z.div, {
            className: O.keyboardShortcutsModal,
            style: this.getStyles(),
            children: [
                (0, r.jsxs)(_.H, {
                    className: O.modalTitle,
                    children: [
                        (0, r.jsx)('div', {
                            className: O.content,
                            children: T.intl.string(T.t['1BdUt7'])
                        }),
                        (0, r.jsx)(_.KeyCombo, { shortcut: 'mod+/' })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: O.modalSubtitle,
                    children: T.intl.string(T.t['2t19lZ'])
                }),
                (0, r.jsxs)('div', {
                    className: O.ddrArrows,
                    children: [
                        (0, r.jsx)(D, {
                            arrow: 'LEFT',
                            isActive: s,
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
                            isActive: n,
                            className: O.right,
                            children: 'right'
                        })
                    ]
                }),
                (0, r.jsx)(_.AdvancedScrollerAuto, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, r.jsx)(_.HeadingLevel, { children: (0, r.jsx)(P, {}) })
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
                d()(null != e, 'Scroller is pagedUp when not mounted'), e.scrollPageUp({ animate: !0 });
            }),
            x(this, 'scrollPageDown', () => {
                let e = this.scrollerRef.current;
                d()(null != e, 'Scroller is pagedDown when not mounted'), e.scrollPageDown({ animate: !0 });
            }),
            x(this, 'arrowUp', (e) => {
                let { direction: t } = e;
                this.setState({ [t]: !1 });
            }),
            x(this, 'arrowDown', (e) => {
                let { direction: t } = e;
                y[t](), this.setState({ [t]: !0 });
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
                if ((this.lastInputedKeys.push(e.keyCode), (this.lastInputedKeys = this.lastInputedKeys.slice(-5)), this.lastInputedKeys[0] === S.yXg.H && this.lastInputedKeys[1] === S.yXg.H && this.lastInputedKeys[2] === S.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === S.yXg.N && this.lastInputedKeys[4] === S.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled)) return;
                let t = M(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
            }),
            x(this, 'handleKeyUp', (e) => {
                if (this.props.keyboardModeEnabled) return;
                let t = M(e);
                null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
            }),
            x(this, 'onArrowClick', (e) => {
                this.arrowDown({ direction: e });
            });
    }
}
function D(e) {
    let { isActive: t, arrow: s, className: n, children: i } = e,
        [a, c] = o.useState(t),
        d = o.useCallback(() => {
            y[s](), c(!0);
        }, [s]);
    return (
        o.useEffect(() => {
            if (a) {
                let e = setTimeout(() => c(!1), 500);
                return () => clearTimeout(e);
            }
        }, [a]),
        (0, r.jsx)(_.Clickable, {
            onClick: d,
            className: l()(O.arrow, n, { [O.active]: t || a }),
            children: i
        })
    );
}
function U(e) {
    let { transitionState: t, onClose: s } = e,
        [n, i] = o.useState(!1),
        [a, c] = o.useState(!1),
        d = o.useMemo(() => (__OVERLAY__ ? (0, g.Zg)() : (0, C.Rv)()), []),
        { keyboardModeEnabled: u, useReducedMotion: h } = (0, p.cj)([f.Z], () => ({
            keyboardModeEnabled: f.Z.keyboardModeEnabled,
            useReducedMotion: f.Z.useReducedMotion
        }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L, { showBackdrop: a }),
            (0, r.jsx)(_.ModalRoot, {
                className: l()(O.noBackground, { [O.noShadow]: n }),
                size: _.ModalSize.DYNAMIC,
                'aria-label': T.intl.string(T.t.T9DA2N),
                transitionState: t,
                children: (0, r.jsx)(m.W, {
                    component: 'div',
                    children: n
                        ? (0, r.jsx)(
                              I.Z,
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
