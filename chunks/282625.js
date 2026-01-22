n.d(t, {
    A: () => B,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(837381),
    c = n(621466),
    o = n(311907),
    d = n(783878),
    u = n(397927),
    f = n(137130),
    g = n(442433),
    b = n(974544),
    m = n(928039),
    p = n(544028),
    x = n(411153),
    h = n(427157),
    j = n(734057),
    O = n(71393),
    y = n(351906),
    v = n(287809),
    A = n(403362),
    E = n(427262),
    N = n(555337),
    _ = n(276373),
    S = n(523599),
    T = n(438407),
    I = n(258665),
    C = n(652215),
    P = n(985018),
    w = n(688661),
    R = n(63135);

function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}

function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let M = i.forwardRef((e, t) => {
    let [i, ...l] = [e, t],
        { onHeaderClick: s, guildId: a, guild: c } = i,
        o = k(i, ["onHeaderClick", "guildId", "guild"]),
        [d] = l;
    return null == a
        ? null
        : (0, r.jsx)(
              I.A,
              L(
                  G(
                      {
                          ref: d,
                      },
                      o,
                  ),
                  {
                      guildId: a,
                      guild: c,
                      onHeaderClick: () => {
                          let { log: e } = o;
                          null == s || s(e);
                      },
                      onUserContextMenu: (e) => {
                          let { log: t } = o,
                              { user: i } = t;
                          null != i &&
                              null != a &&
                              (0, g.L3)(e, async () => {
                                  let { default: e } = await n.e("76926").then(n.bind(n, 422189));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          L(G({}, t), {
                                              guildId: a,
                                              user: i,
                                          }),
                                      );
                              });
                      },
                      onChannelContextMenu: (e) => {
                          let { log: t } = o,
                              i = O.A.getGuild(a);
                          null != t.options.channel &&
                              "string" != typeof t.options.channel &&
                              null != i &&
                              (0, g.L3)(e, async () => {
                                  let { default: e } = await n.e("23440").then(n.bind(n, 194195));
                                  return (n) =>
                                      null != t.options.channel
                                          ? (0, r.jsx)(
                                                e,
                                                L(G({}, n), {
                                                    channel: t.options.channel,
                                                }),
                                            )
                                          : null;
                              });
                      },
                      onTargetContextMenu: (e) => {
                          let { log: t } = o;
                          switch (t.targetType) {
                              case C.GaG.CHANNEL:
                              case C.GaG.CHANNEL_OVERWRITE:
                                  let i = j.A.getChannel(t.targetId),
                                      l = O.A.getGuild(a);
                                  if (null != i && null != l)
                                      return (0, g.L3)(e, async () => {
                                          let { default: e } = await n.e("23440").then(n.bind(n, 194195));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  L(G({}, t), {
                                                      channel: i,
                                                  }),
                                              );
                                      });
                                  return (0, g.L3)(e, async () => {
                                      let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              L(G({}, n), {
                                                  id: t.targetId,
                                                  label: P.intl.string(P.t.rCazna),
                                              }),
                                          );
                                  });
                              case C.GaG.USER:
                                  let s = v.default.getUser(t.targetId);
                                  if (null != s && null != a)
                                      return (0, g.L3)(e, async () => {
                                          let { default: e } = await n.e("76926").then(n.bind(n, 422189));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  L(G({}, t), {
                                                      guildId: a,
                                                      user: s,
                                                  }),
                                              );
                                      });
                          }
                          return null;
                      },
                  },
              ),
          );
});

function U(e) {
    let {
            logs: t,
            guildId: n,
            guild: l,
            expandedId: s,
            lastExpandedId: c,
            scroller: o,
            setExpandedRef: d,
            setLastExpandedRef: u,
            onHeaderClick: f,
            onContentClick: g,
        } = e,
        b = i.useRef(o);
    i.useEffect(() => {
        b.current = o;
    }, [o]);
    let p = (0, m.A)("audit-log", b);
    return (0, r.jsx)(a.hD, {
        navigator: p,
        children: (0, r.jsx)(a.PR, {
            children: (e) => {
                let { ref: i } = e,
                    a = k(e, ["ref"]);
                return (0, r.jsx)(
                    "div",
                    L(
                        G(
                            {
                                ref: i,
                            },
                            a,
                        ),
                        {
                            className: w.p_,
                            children: t.map((e) => {
                                let t = s === e.id,
                                    i = c === e.id,
                                    a = t ? d : i ? u : null;
                                return (0, r.jsx)(
                                    M,
                                    {
                                        guildId: n,
                                        guild: l,
                                        ref: (e) => {
                                            null == a || a(e);
                                        },
                                        className: w.nM,
                                        onHeaderClick: f,
                                        onContentClick: g,
                                        log: e,
                                        expanded: t,
                                    },
                                    e.id,
                                );
                            }),
                        },
                    ),
                );
            },
        }),
    });
}
M.displayName = "AuditLogClickWrap";
class F extends i.PureComponent {
    componentDidMount() {
        (0, f.Wy)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handleOutsideClick);
    }
    componentDidUpdate(e, t) {
        this.state.expandedId !== t.expandedId && this.fixScroll(),
            !this.props.showLoadMore &&
                this.props.logs.length !== e.logs.length &&
                null != this._scrollerRef &&
                this.isScrollerAtBottom() &&
                (0, f.jS)(this.props.guildId, !0);
    }
    isScrollerAtBottom() {
        var e;
        return (null == (e = this._scrollerRef) ? void 0 : e.isScrolledToBottom()) || !1;
    }
    fixScroll() {
        let e = this._scrollerRef;
        if (null == e) return;
        let t = this.getRects(),
            n = this._prevRects;
        if (null == t.expanded || null == t.lastExpanded || null == n.expanded || t.expanded.top < t.lastExpanded.top)
            return;
        let r = n.expanded.height - t.lastExpanded.height,
            i = e.getScrollerState().scrollTop - r;
        e.scrollTo({
            to: i,
        });
    }
    getRects() {
        let e = {
            lastExpanded: null,
            expanded: null,
        };
        if (null != this._lastExpandedRef) {
            let t = this._lastExpandedRef;
            (0, c.vq)(t) && (e.lastExpanded = t.getBoundingClientRect());
        }
        if (null != this._expandedRef) {
            let t = this._expandedRef;
            (0, c.vq)(t) && (e.expanded = t.getBoundingClientRect());
        }
        return e;
    }
    renderHeader() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: w.P_,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: P.intl.string(P.t.SPWLyT),
                        }),
                        this.renderHeaderDropdowns(),
                    ],
                }),
                (0, r.jsx)(u.cGx, {
                    className: w.yF,
                }),
            ],
        });
    }
    renderSpinner() {
        return (0, r.jsx)(u.y$y, {
            type: u.y$y.Type.SPINNING_CIRCLE,
        });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            {
                logs: i,
                theme: l,
                hide: s,
                isInitialLoading: a,
                isLoading: c,
                hasError: o,
                guildId: d,
                guild: f,
            } = this.props;
        if (s) return (0, r.jsx)(b.A, {});
        if (c || a) return this.renderSpinner();
        if (0 === i.length) {
            let e = o ? P.intl.string(P.t.tzkaD7) : P.intl.string(P.t.lNuYhh),
                t = o ? P.intl.string(P.t.Ww5Tjy) : P.intl.string(P.t["RHhk+P"]);
            return (0, r.jsxs)(u.ppr, {
                theme: l,
                className: w.Ie,
                children: [
                    (0, r.jsx)(u.G8R, {
                        darkSrc: n(673586),
                        lightSrc: n(470954),
                        width: 272,
                        height: 130,
                    }),
                    (0, r.jsx)(u.SGT, {
                        note: e,
                        style: {
                            maxWidth: 300,
                        },
                        children: t,
                    }),
                ],
            });
        }
        return (0, r.jsx)(U, {
            logs: i,
            guildId: d,
            guild: f,
            expandedId: e,
            lastExpandedId: t,
            setExpandedRef: this.handleSetExpandedRef,
            setLastExpandedRef: this.handleSetLastExpandedRef,
            onHeaderClick: this.handleHeaderClick,
            onContentClick: this.handleContentClick,
            scroller: this._scrollerRef,
        });
    }
    render() {
        let { isLoadingNextPage: e, hide: t, isLoading: n } = this.props;
        return (0, r.jsx)("div", {
            className: R.customColumn,
            children: (0, r.jsx)("div", {
                className: R.customContainer,
                children: (0, r.jsx)(u.GtU, {
                    className: s()(R.customScroller, w.XG),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, r.jsx)("div", {
                        className: w.Qs,
                        ref: this._contentRef,
                        children: (0, r.jsxs)(u.xpW, {
                            containerRef: this._contentRef,
                            children: [
                                this.renderHeader(),
                                this.renderContent(),
                                this.renderLoadMore(),
                                !e || t || n ? null : this.renderSpinner(),
                            ],
                        }),
                    }),
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            D(this, "_clickedInside", !1),
            D(this, "_scrollerRef", null),
            D(this, "_expandedRef", null),
            D(this, "_lastExpandedRef", null),
            D(this, "_prevRects", this.getRects()),
            D(this, "_contentRef", i.createRef()),
            D(this, "state", {
                expandedId: null,
                lastExpandedId: null,
                actionFilterQuery: "",
            }),
            D(this, "formatActionOption", (e) => {
                let t = (0, x.pq)(e.value),
                    n = (0, x.Ag)(e.value);
                return {
                    id: e.value,
                    value: e.value,
                    label: e.label,
                    leading: (0, r.jsx)(T.Hg, {
                        themeOverride: null,
                        actionType: t,
                        targetType: n,
                        action: e.value,
                    }),
                };
            }),
            D(this, "formatUserOption", (e) => {
                if (!(e.user instanceof h.A))
                    return {
                        id: e.value,
                        value: e.value,
                        label: e.label,
                        leading: (0, r.jsx)(u.nFg, {
                            size: "custom",
                            color: "currentColor",
                            width: 30,
                            height: 30,
                        }),
                    };
                {
                    let t = e.user;
                    return {
                        id: t.id,
                        value: t.id,
                        label: E.Ay.getUserTag(t, {
                            mode: "username",
                        }),
                        leading: (0, r.jsx)(u.euF, {
                            size: u._3J.SIZE_24,
                            src: t.getAvatarURL(this.props.guildId, 32),
                            "aria-label": t.username,
                            className: w.my,
                        }),
                        trailing: t.hasUniqueUsername()
                            ? void 0
                            : (0, r.jsxs)(u.Text, {
                                  variant: "text-xs/normal",
                                  className: w.D2,
                                  children: ["#", t.discriminator],
                              }),
                    };
                }
            }),
            D(this, "renderHeaderDropdowns", () => {
                var e, t;
                let { actionFilter: n, hide: i, userIdFilter: l, moderators: s } = this.props;
                if (i) return null;
                let a = _.d8(),
                    c =
                        null !=
                        (e = a.find((e) => {
                            let { value: t } = e;
                            return n === t;
                        }))
                            ? e
                            : a[0],
                    o = {
                        label: P.intl.string(P.t.ZRFdsL),
                        valueLabel: P.intl.string(P.t.an9Ry3),
                        value: null,
                    },
                    u = [o, ...s].map((e) =>
                        e instanceof h.A
                            ? {
                                  label: e.username,
                                  value: e.id,
                                  user: e,
                              }
                            : e,
                    ),
                    f =
                        null !=
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === l;
                        }))
                            ? t
                            : o;
                return (0, r.jsxs)("div", {
                    className: w.SO,
                    children: [
                        (0, r.jsx)(d.Z, {
                            options: u,
                            formatOption: this.formatUserOption,
                            value: f.value,
                            onSelectionChange: this.handleFilterUserChange,
                            label: P.intl.string(P.t["hxnY/q"]),
                            placeholder: P.intl.string(P.t.pYHobK),
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(d.Z, {
                            placeholder: P.intl.string(P.t.I288Zx),
                            label: P.intl.string(P.t.rautds),
                            options: a,
                            formatOption: this.formatActionOption,
                            value: c.value,
                            onSelectionChange: this.handleFilterActionChange,
                            selectionMode: "single",
                        }),
                    ],
                });
            }),
            D(this, "renderLoadMore", () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: w.UX,
                        children: (0, r.jsx)(u.Button, {
                            variant: "secondary",
                            text: P.intl.string(P.t["Q/LSXp"]),
                            onClick: this.handleFetchNextPage,
                        }),
                    });
            }),
            D(this, "handleFilterActionChange", (e) => {
                (0, f.gN)(e, this.props.guildId);
            }),
            D(this, "handleFilterUserChange", (e) => {
                (0, f.ER)(e, this.props.guildId);
            }),
            D(this, "handleHeaderClick", (e) => {
                let { expandedId: t } = this.state;
                t !== e.id
                    ? ((this._clickedInside = !0),
                      this.setState({
                          expandedId: e.id,
                          lastExpandedId: t,
                      }),
                      (this._prevRects = this.getRects()))
                    : ((this._expandedRef = null),
                      (this._lastExpandedRef = null),
                      null != t && (this._prevRects = this.getRects()),
                      this.setState({
                          expandedId: null,
                          lastExpandedId: null,
                      }));
            }),
            D(this, "handleOutsideClick", () => {
                null == this.state.expandedId || this._clickedInside
                    ? null != this.state.expandedId && (this._clickedInside = !1)
                    : ((this._expandedRef = null),
                      (this._lastExpandedRef = null),
                      this.setState({
                          expandedId: null,
                          lastExpandedId: null,
                      }),
                      (this._prevRects = this.getRects()));
            }),
            D(this, "handleContentClick", (e) => {
                (this._clickedInside = !0), e.stopPropagation();
            }),
            D(this, "handleSetScrollerRef", (e) => {
                this._scrollerRef = e;
            }),
            D(this, "handleOnScroll", () => {
                this.isScrollerAtBottom() && this.handleFetchNextPage();
            }),
            D(this, "handleFetchNextPage", () => {
                (0, f.jS)(this.props.guildId);
            }),
            D(this, "handleActionFilterQueryChange", (e) => {
                this.setState({
                    actionFilterQuery: e,
                });
            }),
            D(this, "handleActionFilterQueryClear", () => {
                this.setState({
                    actionFilterQuery: "",
                });
            }),
            D(this, "handleSetExpandedRef", (e) => {
                this._expandedRef = e;
            }),
            D(this, "handleSetLastExpandedRef", (e) => {
                this._lastExpandedRef = e;
            });
    }
}
let B = o.Ay.connectStores([S.A, N.A, O.A, p.A, y.A, v.default], () => {
    let e = N.A.getGuildId(),
        t = O.A.getGuild(e),
        n = S.A.logs;
    return {
        guildId: e,
        guild: t,
        moderators: S.A.userIds.map((e) => v.default.getUser(e)).filter(A.Vq),
        isInitialLoading: S.A.isInitialLoading,
        isLoading: S.A.isLoading,
        isLoadingNextPage: S.A.isLoadingNextPage,
        showLoadMore: S.A.groupedFetchCount > 2,
        hasError: S.A.hasError,
        hasOlderLogs: S.A.hasOlderLogs,
        logs: null != n && null != t ? _.yy(n, t) : [],
        actionFilter: S.A.actionFilter,
        userIdFilter: S.A.userIdFilter,
        theme: p.A.theme,
        hide: y.A.enabled,
    };
})(F);
