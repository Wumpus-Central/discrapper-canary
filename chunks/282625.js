"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(837381),
    o = n(621466),
    d = n(311907),
    c = n(397927),
    u = n(137130),
    m = n(442433),
    g = n(974544),
    x = n(928039),
    h = n(544028),
    _ = n(411153),
    p = n(427157),
    A = n(734057),
    f = n(71393),
    j = n(351906),
    N = n(287809),
    E = n(403362),
    b = n(427262),
    C = n(555337),
    T = n(276373),
    I = n(523599),
    v = n(438407),
    S = n(258665),
    y = n(652215),
    R = n(985018),
    O = n(819570),
    L = n(223698);
let G = s.forwardRef((e, t) => {
    let { onHeaderClick: s, guildId: l, guild: r, ...a } = e;
    return null == l
        ? null
        : (0, i.jsx)(S.A, {
              ref: t,
              ...a,
              guildId: l,
              guild: r,
              onHeaderClick: () => {
                  let { log: e } = a;
                  s?.(e);
              },
              onUserContextMenu: (e) => {
                  let { log: t } = a,
                      { user: s } = t;
                  null != s &&
                      null != l &&
                      (0, m.L3)(e, async () => {
                          let { default: e } = await n.e("76926").then(n.bind(n, 422189));
                          return (t) => (0, i.jsx)(e, { ...t, guildId: l, user: s });
                      });
              },
              onChannelContextMenu: (e) => {
                  let { log: t } = a,
                      s = f.A.getGuild(l);
                  null != t.options.channel &&
                      "string" != typeof t.options.channel &&
                      null != s &&
                      (0, m.L3)(e, async () => {
                          let { default: e } = await n.e("23440").then(n.bind(n, 194195));
                          return (n) =>
                              null != t.options.channel ? (0, i.jsx)(e, { ...n, channel: t.options.channel }) : null;
                      });
              },
              onTargetContextMenu: (e) => {
                  let { log: t } = a;
                  switch (t.targetType) {
                      case y.GaG.CHANNEL:
                      case y.GaG.CHANNEL_OVERWRITE:
                          let s = A.A.getChannel(t.targetId),
                              r = f.A.getGuild(l);
                          if (null != s && null != r)
                              return (0, m.L3)(e, async () => {
                                  let { default: e } = await n.e("23440").then(n.bind(n, 194195));
                                  return (t) => (0, i.jsx)(e, { ...t, channel: s });
                              });
                          return (0, m.L3)(e, async () => {
                              let { default: e } = await n.e("15687").then(n.bind(n, 646938));
                              return (n) => (0, i.jsx)(e, { ...n, id: t.targetId, label: R.intl.string(R.t.rCazna) });
                          });
                      case y.GaG.USER:
                          let o = N.default.getUser(t.targetId);
                          if (null != o && null != l)
                              return (0, m.L3)(e, async () => {
                                  let { default: e } = await n.e("76926").then(n.bind(n, 422189));
                                  return (t) => (0, i.jsx)(e, { ...t, guildId: l, user: o });
                              });
                  }
                  return null;
              },
          });
});
function D(e) {
    let {
            logs: t,
            guildId: n,
            guild: l,
            expandedId: r,
            lastExpandedId: o,
            scroller: d,
            setExpandedRef: c,
            setLastExpandedRef: u,
            onHeaderClick: m,
            onContentClick: g,
        } = e,
        h = s.useRef(d);
    s.useEffect(() => {
        h.current = d;
    }, [d]);
    let _ = (0, x.A)("audit-log", h);
    return (0, i.jsx)(a.hD, {
        navigator: _,
        children: (0, i.jsx)(a.PR, {
            children: (e) => {
                let { ref: s, ...a } = e;
                return (0, i.jsx)("div", {
                    ref: s,
                    ...a,
                    className: O.p_,
                    children: t.map((e) => {
                        let t = r === e.id,
                            s = o === e.id,
                            a = t ? c : s ? u : null;
                        return (0, i.jsx)(
                            G,
                            {
                                guildId: n,
                                guild: l,
                                ref: (e) => {
                                    a?.(e);
                                },
                                className: O.nM,
                                onHeaderClick: m,
                                onContentClick: g,
                                log: e,
                                expanded: t,
                            },
                            e.id,
                        );
                    }),
                });
            },
        }),
    });
}
G.displayName = "AuditLogClickWrap";
class M extends s.PureComponent {
    _clickedInside = !1;
    _scrollerRef = null;
    _expandedRef = null;
    _lastExpandedRef = null;
    _prevRects = this.getRects();
    _contentRef = s.createRef();
    state = { expandedId: null, lastExpandedId: null, actionFilterQuery: "" };
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
        return this._scrollerRef?.isScrolledToBottom() || !1;
    }
    fixScroll() {
        let e = this._scrollerRef;
        if (null == e) return;
        let t = this.getRects(),
            n = this._prevRects;
        if (null == t.expanded || null == t.lastExpanded || null == n.expanded || t.expanded.top < t.lastExpanded.top)
            return;
        let i = n.expanded.height - t.lastExpanded.height,
            s = e.getScrollerState().scrollTop - i;
        e.scrollTo({ to: s });
    }
    getRects() {
        let e = { lastExpanded: null, expanded: null };
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
    formatActionOption = (e) => {
        let t = (0, _.pq)(e.value),
            n = (0, _.Ag)(e.value);
        return {
            id: e.value,
            value: e.value,
            label: e.label,
            leading: (0, i.jsx)(v.H, { themeOverride: null, actionType: t, targetType: n, action: e.value }),
        };
    };
    formatUserOption = (e) => {
        if (!(e.user instanceof p.A))
            return {
                id: e.value,
                value: e.value,
                label: e.label,
                leading: (0, i.jsx)(c.nFg, { size: "custom", color: "currentColor", width: 30, height: 30 }),
            };
        {
            let t = e.user;
            return {
                id: t.id,
                value: t.id,
                label: b.Ay.getUserTag(t, { mode: "username" }),
                leading: (0, i.jsx)(c.euF, {
                    size: c._3J.SIZE_24,
                    src: t.getAvatarURL(this.props.guildId, 32),
                    "aria-label": t.username,
                    className: O.my,
                }),
                trailing: t.hasUniqueUsername()
                    ? void 0
                    : (0, i.jsxs)(c.Text, {
                          variant: "text-xs/normal",
                          className: O.D2,
                          children: ["#", t.discriminator],
                      }),
            };
        }
    };
    renderHeaderDropdowns = () => {
        let { actionFilter: e, hide: t, userIdFilter: n, moderators: s } = this.props;
        if (t) return null;
        let l = T.ACTION_FILTER_ITEMS(),
            r =
                l.find((t) => {
                    let { value: n } = t;
                    return e === n;
                }) ?? l[0],
            a = { label: R.intl.string(R.t.ZRFdsL), valueLabel: R.intl.string(R.t.an9Ry3), value: null },
            o = [a, ...s].map((e) => (e instanceof p.A ? { label: e.username, value: e.id, user: e } : e)),
            d =
                o.find((e) => {
                    let { value: t } = e;
                    return t === n;
                }) ?? a;
        return (0, i.jsxs)("div", {
            className: O.SO,
            children: [
                (0, i.jsx)(c.ZiE, {
                    options: o,
                    formatOption: this.formatUserOption,
                    value: d.value,
                    onSelectionChange: this.handleFilterUserChange,
                    label: R.intl.string(R.t["hxnY/q"]),
                    placeholder: R.intl.string(R.t.pYHobK),
                    selectionMode: "single",
                }),
                (0, i.jsx)(c.ZiE, {
                    placeholder: R.intl.string(R.t.I288Zx),
                    label: R.intl.string(R.t.rautds),
                    options: l,
                    formatOption: this.formatActionOption,
                    value: r.value,
                    onSelectionChange: this.handleFilterActionChange,
                    selectionMode: "single",
                }),
            ],
        });
    };
    renderHeader() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: O.P_,
                    children: [
                        (0, i.jsx)(c.Heading, { variant: "heading-lg/semibold", children: R.intl.string(R.t.SPWLyT) }),
                        this.renderHeaderDropdowns(),
                    ],
                }),
                (0, i.jsx)(c.cGx, { className: O.yF }),
            ],
        });
    }
    renderSpinner() {
        return (0, i.jsx)(c.y$y, { type: c.y$y.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            {
                logs: s,
                theme: l,
                hide: r,
                isInitialLoading: a,
                isLoading: o,
                hasError: d,
                guildId: u,
                guild: m,
            } = this.props;
        if (r) return (0, i.jsx)(g.A, {});
        if (o || a) return this.renderSpinner();
        if (0 === s.length) {
            let e = d ? R.intl.string(R.t.tzkaD7) : R.intl.string(R.t.lNuYhh),
                t = d ? R.intl.string(R.t.Ww5Tjy) : R.intl.string(R.t["RHhk+P"]);
            return (0, i.jsxs)(c.ppr, {
                theme: l,
                className: O.Ie,
                children: [
                    (0, i.jsx)(c.G8R, { darkSrc: n(673586), lightSrc: n(470954), width: 272, height: 130 }),
                    (0, i.jsx)(c.SGT, { note: e, style: { maxWidth: 300 }, children: t }),
                ],
            });
        }
        return (0, i.jsx)(D, {
            logs: s,
            guildId: u,
            guild: m,
            expandedId: e,
            lastExpandedId: t,
            setExpandedRef: this.handleSetExpandedRef,
            setLastExpandedRef: this.handleSetLastExpandedRef,
            onHeaderClick: this.handleHeaderClick,
            onContentClick: this.handleContentClick,
            scroller: this._scrollerRef,
        });
    }
    renderLoadMore = () => {
        let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
        if (e && t && !n)
            return (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: O.UX,
                children: (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    text: R.intl.string(R.t["Q/LSXp"]),
                    onClick: this.handleFetchNextPage,
                }),
            });
    };
    render() {
        let { isLoadingNextPage: e, hide: t, isLoading: n } = this.props;
        return (0, i.jsx)("div", {
            className: L.customColumn,
            children: (0, i.jsx)("div", {
                className: L.customContainer,
                children: (0, i.jsx)(c.GtU, {
                    className: r()(L.customScroller, O.XG),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, i.jsx)("div", {
                        className: O.Qs,
                        ref: this._contentRef,
                        children: (0, i.jsxs)(c.xpW, {
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
    handleFilterActionChange = (e) => {
        (0, u.gN)(e, this.props.guildId);
    };
    handleFilterUserChange = (e) => {
        (0, u.ER)(e, this.props.guildId);
    };
    handleHeaderClick = (e) => {
        let { expandedId: t } = this.state;
        t !== e.id
            ? ((this._clickedInside = !0),
              this.setState({ expandedId: e.id, lastExpandedId: t }),
              (this._prevRects = this.getRects()))
            : ((this._expandedRef = null),
              (this._lastExpandedRef = null),
              null != t && (this._prevRects = this.getRects()),
              this.setState({ expandedId: null, lastExpandedId: null }));
    };
    handleOutsideClick = () => {
        null == this.state.expandedId || this._clickedInside
            ? null != this.state.expandedId && (this._clickedInside = !1)
            : ((this._expandedRef = null),
              (this._lastExpandedRef = null),
              this.setState({ expandedId: null, lastExpandedId: null }),
              (this._prevRects = this.getRects()));
    };
    handleContentClick = (e) => {
        (this._clickedInside = !0), e.stopPropagation();
    };
    handleSetScrollerRef = (e) => {
        this._scrollerRef = e;
    };
    handleOnScroll = () => {
        this.isScrollerAtBottom() && this.handleFetchNextPage();
    };
    handleFetchNextPage = () => {
        (0, u.jS)(this.props.guildId);
    };
    handleActionFilterQueryChange = (e) => {
        this.setState({ actionFilterQuery: e });
    };
    handleActionFilterQueryClear = () => {
        this.setState({ actionFilterQuery: "" });
    };
    handleSetExpandedRef = (e) => {
        this._expandedRef = e;
    };
    handleSetLastExpandedRef = (e) => {
        this._lastExpandedRef = e;
    };
}
let k = d.Ay.connectStores([I.A, C.A, f.A, h.A, j.A, N.default], () => {
    let e = C.A.getGuildId(),
        t = f.A.getGuild(e),
        n = I.A.logs;
    return {
        guildId: e,
        guild: t,
        moderators: I.A.userIds.map((e) => N.default.getUser(e)).filter(E.Vq),
        isInitialLoading: I.A.isInitialLoading,
        isLoading: I.A.isLoading,
        isLoadingNextPage: I.A.isLoadingNextPage,
        showLoadMore: I.A.groupedFetchCount > 2,
        hasError: I.A.hasError,
        hasOlderLogs: I.A.hasOlderLogs,
        logs: null != n && null != t ? T.transformLogs(n, t) : [],
        actionFilter: I.A.actionFilter,
        userIdFilter: I.A.userIdFilter,
        theme: h.A.theme,
        hide: j.A.enabled,
    };
})(M);
