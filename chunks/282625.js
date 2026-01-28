n.d(t, {
    A: () => B,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(837381),
    o = n(621466),
    c = n(311907),
    d = n(397927),
    u = n(137130),
    g = n(442433),
    m = n(974544),
    p = n(928039),
    f = n(544028),
    h = n(411153),
    b = n(427157),
    x = n(734057),
    j = n(71393),
    _ = n(351906),
    O = n(287809),
    v = n(403362),
    y = n(427262),
    A = n(555337),
    E = n(276373),
    N = n(523599),
    S = n(438407),
    I = n(258665),
    T = n(652215),
    C = n(985018),
    P = n(688661),
    w = n(63135);

function R(e, t, n) {
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

function D(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}

function G(e, t) {
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

function L(e, t) {
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
let k = i.forwardRef((e, t) => {
    let [i, ...l] = [e, t],
        { onHeaderClick: s, guildId: a, guild: o } = i,
        c = L(i, ["onHeaderClick", "guildId", "guild"]),
        [d] = l;
    return null == a
        ? null
        : (0, r.jsx)(
              I.A,
              G(
                  D(
                      {
                          ref: d,
                      },
                      c,
                  ),
                  {
                      guildId: a,
                      guild: o,
                      onHeaderClick: () => {
                          let { log: e } = c;
                          null == s || s(e);
                      },
                      onUserContextMenu: (e) => {
                          let { log: t } = c,
                              { user: i } = t;
                          null != i &&
                              null != a &&
                              (0, g.L3)(e, async () => {
                                  let { default: e } = await n.e("76926").then(n.bind(n, 422189));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          G(D({}, t), {
                                              guildId: a,
                                              user: i,
                                          }),
                                      );
                              });
                      },
                      onChannelContextMenu: (e) => {
                          let { log: t } = c,
                              i = j.A.getGuild(a);
                          null != t.options.channel &&
                              "string" != typeof t.options.channel &&
                              null != i &&
                              (0, g.L3)(e, async () => {
                                  let { default: e } = await n.e("23440").then(n.bind(n, 194195));
                                  return (n) =>
                                      null != t.options.channel
                                          ? (0, r.jsx)(
                                                e,
                                                G(D({}, n), {
                                                    channel: t.options.channel,
                                                }),
                                            )
                                          : null;
                              });
                      },
                      onTargetContextMenu: (e) => {
                          let { log: t } = c;
                          switch (t.targetType) {
                              case T.GaG.CHANNEL:
                              case T.GaG.CHANNEL_OVERWRITE:
                                  let i = x.A.getChannel(t.targetId),
                                      l = j.A.getGuild(a);
                                  if (null != i && null != l)
                                      return (0, g.L3)(e, async () => {
                                          let { default: e } = await n.e("23440").then(n.bind(n, 194195));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  G(D({}, t), {
                                                      channel: i,
                                                  }),
                                              );
                                      });
                                  return (0, g.L3)(e, async () => {
                                      let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              G(D({}, n), {
                                                  id: t.targetId,
                                                  label: C.intl.string(C.t.rCazna),
                                              }),
                                          );
                                  });
                              case T.GaG.USER:
                                  let s = O.default.getUser(t.targetId);
                                  if (null != s && null != a)
                                      return (0, g.L3)(e, async () => {
                                          let { default: e } = await n.e("76926").then(n.bind(n, 422189));
                                          return (t) =>
                                              (0, r.jsx)(
                                                  e,
                                                  G(D({}, t), {
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

function M(e) {
    let {
            logs: t,
            guildId: n,
            guild: l,
            expandedId: s,
            lastExpandedId: o,
            scroller: c,
            setExpandedRef: d,
            setLastExpandedRef: u,
            onHeaderClick: g,
            onContentClick: m,
        } = e,
        f = i.useRef(c);
    i.useEffect(() => {
        f.current = c;
    }, [c]);
    let h = (0, p.A)("audit-log", f);
    return (0, r.jsx)(a.hD, {
        navigator: h,
        children: (0, r.jsx)(a.PR, {
            children: (e) => {
                let { ref: i } = e,
                    a = L(e, ["ref"]);
                return (0, r.jsx)(
                    "div",
                    G(
                        D(
                            {
                                ref: i,
                            },
                            a,
                        ),
                        {
                            className: P.p_,
                            children: t.map((e) => {
                                let t = s === e.id,
                                    i = o === e.id,
                                    a = t ? d : i ? u : null;
                                return (0, r.jsx)(
                                    k,
                                    {
                                        guildId: n,
                                        guild: l,
                                        ref: (e) => {
                                            null == a || a(e);
                                        },
                                        className: P.nM,
                                        onHeaderClick: g,
                                        onContentClick: m,
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
k.displayName = "AuditLogClickWrap";
class U extends i.PureComponent {
    componentDidMount() {
        (0, u.Wy)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick);
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
                (0, u.jS)(this.props.guildId, !0);
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
            (0, o.vq)(t) && (e.lastExpanded = t.getBoundingClientRect());
        }
        if (null != this._expandedRef) {
            let t = this._expandedRef;
            (0, o.vq)(t) && (e.expanded = t.getBoundingClientRect());
        }
        return e;
    }
    renderHeader() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: P.P_,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            children: C.intl.string(C.t.SPWLyT),
                        }),
                        this.renderHeaderDropdowns(),
                    ],
                }),
                (0, r.jsx)(d.cGx, {
                    className: P.yF,
                }),
            ],
        });
    }
    renderSpinner() {
        return (0, r.jsx)(d.y$y, {
            type: d.y$y.Type.SPINNING_CIRCLE,
        });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            {
                logs: i,
                theme: l,
                hide: s,
                isInitialLoading: a,
                isLoading: o,
                hasError: c,
                guildId: u,
                guild: g,
            } = this.props;
        if (s) return (0, r.jsx)(m.A, {});
        if (o || a) return this.renderSpinner();
        if (0 === i.length) {
            let e = c ? C.intl.string(C.t.tzkaD7) : C.intl.string(C.t.lNuYhh),
                t = c ? C.intl.string(C.t.Ww5Tjy) : C.intl.string(C.t["RHhk+P"]);
            return (0, r.jsxs)(d.ppr, {
                theme: l,
                className: P.Ie,
                children: [
                    (0, r.jsx)(d.G8R, {
                        darkSrc: n(673586),
                        lightSrc: n(470954),
                        width: 272,
                        height: 130,
                    }),
                    (0, r.jsx)(d.SGT, {
                        note: e,
                        style: {
                            maxWidth: 300,
                        },
                        children: t,
                    }),
                ],
            });
        }
        return (0, r.jsx)(M, {
            logs: i,
            guildId: u,
            guild: g,
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
            className: w.customColumn,
            children: (0, r.jsx)("div", {
                className: w.customContainer,
                children: (0, r.jsx)(d.GtU, {
                    className: s()(w.customScroller, P.XG),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, r.jsx)("div", {
                        className: P.Qs,
                        ref: this._contentRef,
                        children: (0, r.jsxs)(d.xpW, {
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
            R(this, "_clickedInside", !1),
            R(this, "_scrollerRef", null),
            R(this, "_expandedRef", null),
            R(this, "_lastExpandedRef", null),
            R(this, "_prevRects", this.getRects()),
            R(this, "_contentRef", i.createRef()),
            R(this, "state", {
                expandedId: null,
                lastExpandedId: null,
                actionFilterQuery: "",
            }),
            R(this, "formatActionOption", (e) => {
                let t = (0, h.pq)(e.value),
                    n = (0, h.Ag)(e.value);
                return {
                    id: e.value,
                    value: e.value,
                    label: e.label,
                    leading: (0, r.jsx)(S.Hg, {
                        themeOverride: null,
                        actionType: t,
                        targetType: n,
                        action: e.value,
                    }),
                };
            }),
            R(this, "formatUserOption", (e) => {
                if (!(e.user instanceof b.A))
                    return {
                        id: e.value,
                        value: e.value,
                        label: e.label,
                        leading: (0, r.jsx)(d.nFg, {
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
                        label: y.Ay.getUserTag(t, {
                            mode: "username",
                        }),
                        leading: (0, r.jsx)(d.euF, {
                            size: d._3J.SIZE_24,
                            src: t.getAvatarURL(this.props.guildId, 32),
                            "aria-label": t.username,
                            className: P.my,
                        }),
                        trailing: t.hasUniqueUsername()
                            ? void 0
                            : (0, r.jsxs)(d.Text, {
                                  variant: "text-xs/normal",
                                  className: P.D2,
                                  children: ["#", t.discriminator],
                              }),
                    };
                }
            }),
            R(this, "renderHeaderDropdowns", () => {
                var e, t;
                let { actionFilter: n, hide: i, userIdFilter: l, moderators: s } = this.props;
                if (i) return null;
                let a = E.d8(),
                    o =
                        null !=
                        (e = a.find((e) => {
                            let { value: t } = e;
                            return n === t;
                        }))
                            ? e
                            : a[0],
                    c = {
                        label: C.intl.string(C.t.ZRFdsL),
                        valueLabel: C.intl.string(C.t.an9Ry3),
                        value: null,
                    },
                    u = [c, ...s].map((e) =>
                        e instanceof b.A
                            ? {
                                  label: e.username,
                                  value: e.id,
                                  user: e,
                              }
                            : e,
                    ),
                    g =
                        null !=
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === l;
                        }))
                            ? t
                            : c;
                return (0, r.jsxs)("div", {
                    className: P.SO,
                    children: [
                        (0, r.jsx)(d.ZiE, {
                            options: u,
                            formatOption: this.formatUserOption,
                            value: g.value,
                            onSelectionChange: this.handleFilterUserChange,
                            label: C.intl.string(C.t["hxnY/q"]),
                            placeholder: C.intl.string(C.t.pYHobK),
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(d.ZiE, {
                            placeholder: C.intl.string(C.t.I288Zx),
                            label: C.intl.string(C.t.rautds),
                            options: a,
                            formatOption: this.formatActionOption,
                            value: o.value,
                            onSelectionChange: this.handleFilterActionChange,
                            selectionMode: "single",
                        }),
                    ],
                });
            }),
            R(this, "renderLoadMore", () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: P.UX,
                        children: (0, r.jsx)(d.Button, {
                            variant: "secondary",
                            text: C.intl.string(C.t["Q/LSXp"]),
                            onClick: this.handleFetchNextPage,
                        }),
                    });
            }),
            R(this, "handleFilterActionChange", (e) => {
                (0, u.gN)(e, this.props.guildId);
            }),
            R(this, "handleFilterUserChange", (e) => {
                (0, u.ER)(e, this.props.guildId);
            }),
            R(this, "handleHeaderClick", (e) => {
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
            R(this, "handleOutsideClick", () => {
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
            R(this, "handleContentClick", (e) => {
                (this._clickedInside = !0), e.stopPropagation();
            }),
            R(this, "handleSetScrollerRef", (e) => {
                this._scrollerRef = e;
            }),
            R(this, "handleOnScroll", () => {
                this.isScrollerAtBottom() && this.handleFetchNextPage();
            }),
            R(this, "handleFetchNextPage", () => {
                (0, u.jS)(this.props.guildId);
            }),
            R(this, "handleActionFilterQueryChange", (e) => {
                this.setState({
                    actionFilterQuery: e,
                });
            }),
            R(this, "handleActionFilterQueryClear", () => {
                this.setState({
                    actionFilterQuery: "",
                });
            }),
            R(this, "handleSetExpandedRef", (e) => {
                this._expandedRef = e;
            }),
            R(this, "handleSetLastExpandedRef", (e) => {
                this._lastExpandedRef = e;
            });
    }
}
let B = c.Ay.connectStores([N.A, A.A, j.A, f.A, _.A, O.default], () => {
    let e = A.A.getGuildId(),
        t = j.A.getGuild(e),
        n = N.A.logs;
    return {
        guildId: e,
        guild: t,
        moderators: N.A.userIds.map((e) => O.default.getUser(e)).filter(v.Vq),
        isInitialLoading: N.A.isInitialLoading,
        isLoading: N.A.isLoading,
        isLoadingNextPage: N.A.isLoadingNextPage,
        showLoadMore: N.A.groupedFetchCount > 2,
        hasError: N.A.hasError,
        hasOlderLogs: N.A.hasOlderLogs,
        logs: null != n && null != t ? E.yy(n, t) : [],
        actionFilter: N.A.actionFilter,
        userIdFilter: N.A.userIdFilter,
        theme: f.A.theme,
        hide: _.A.enabled,
    };
})(U);
