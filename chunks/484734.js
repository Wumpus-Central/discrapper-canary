n.d(t, {
    KJ: () => F,
    N_: () => Z,
    vw: () => z,
    lg: () => W,
    nG: () => B,
    c3: () => k,
    OS: () => H,
    Y9: () => Y,
    IH: () => K,
});
var i = n(477900),
    l = n(582128),
    r = n(939249),
    s = n(97808),
    a = n(778712),
    o = n(685761),
    d = n(173936),
    c = n(99677),
    u = n(194261),
    A = n(34188),
    E = n(577473),
    h = n(403581),
    C = n(323384),
    _ = n(625903),
    g = n(659421),
    T = n(329308),
    I = n(571694),
    p = n(47167),
    N = n(713654),
    S = n(503698),
    f = n.n(S),
    O = n(62986);
let L = function (e) {
    let { value: t = 0, text: n, className: l, lowImportance: r, ...s } = e;
    return null != n
        ? (0, i.jsx)("div", { className: f()(O.i, l, r && O.H), ...s, children: n })
        : t > 0
          ? (0, i.jsx)("div", { className: f()(O.i, l, r && O.H), ...s, children: t })
          : null;
};
var m = n(769015),
    b = n(168017),
    v = n(106191),
    R = n(548118),
    U = n(376943),
    D = n(636585),
    y = n(71393),
    G = n(994500),
    M = n(287809),
    P = n(147036),
    x = n(427262),
    V = n(105292),
    j = n(445388);
class w extends l.PureComponent {
    node;
    componentDidMount() {
        let { focused: e, onFocus: t } = this.props,
            { node: n } = this;
        e && null != n && t(n);
    }
    componentDidUpdate(e) {
        let { focused: t, onFocus: n } = this.props,
            { node: i } = this;
        null != i && t && !e.focused && n(i);
    }
    handleClick = (e) => {
        e.preventDefault();
        let { onClick: t } = this.props,
            { node: n } = this;
        null != n && t(e, n);
    };
    handleMouseEnter = (e) => {
        let { onMouseEnter: t } = this.props,
            { node: n } = this;
        null != n && t(e, n);
    };
    setRef = (e) => {
        this.node = e;
    };
    render() {
        let { focused: e, children: t, score: n, onContextMenu: l, id: s, "aria-label": a } = this.props;
        return (0, i.jsxs)(r.D, {
            role: "option",
            id: s,
            "aria-label": a,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: j.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: l,
            children: [t, null != n ? (0, i.jsx)("div", { className: j.fN, children: 0 | n }) : null],
        });
    }
}
class H extends l.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: j._C,
            children: (0, i.jsx)(R.Ay, { tabIndex: -1, guild: e, size: R.Ay.Sizes.MINI, className: j.$f }),
        });
    }
    renderName() {
        let { guild: e, inlineLabel: t } = this.props;
        return (0, i.jsxs)("div", {
            className: j.UU,
            children: [
                (0, i.jsx)("span", { className: j.YW, children: e.name }),
                null != t ? (0, i.jsx)("span", { className: j.N4, children: t }) : null,
            ],
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? j.XB : j.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: j.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return V.intl.formatToPlainString(V.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(w, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class k extends l.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, N.gU)(e);
        if (null == t) return null;
        let n = (0, P.Jg)(e) ?? "";
        return (0, i.jsx)("div", {
            className: j.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: j.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: l, channel: r, isMentionLowImportance: s } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(L, { className: j.qS, value: n, lowImportance: s })),
            null != l && (t = (0, i.jsx)("span", { className: j.N4, children: (0, p.m1)(l, M.default, G.A) })),
            (0, i.jsxs)("div", {
                className: j.UU,
                children: [
                    (0, i.jsx)("span", { className: j.YW, children: (0, p.m1)(r, M.default, G.A) }),
                    e,
                    this.renderVoiceStates(),
                    t,
                ],
            })
        );
    }
    renderVoiceStates() {
        let { voiceStates: e, channel: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(D.A, {
                  className: j.x7,
                  guildId: t.guild_id,
                  users: e.map((e) => {
                      let { user: t } = e;
                      return { user: t };
                  }),
                  max: 4,
              });
    }
    renderContent() {
        let { unread: e, mentions: t, children: n } = this.props;
        return (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: e || (null != t && t > 0) ? j.XB : j.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: j.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = y.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, p.m1)(e, M.default, G.A),
            i = (0, P.Jg)(e);
        return V.intl.formatToPlainString(V.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(w, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class B extends l.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: j.IU,
            children: (0, i.jsx)(s.eu, { src: (0, I.Y)(e), size: a._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(L, { className: j.qS, value: t })),
            (0, i.jsxs)("div", {
                className: j.UU,
                children: [(0, i.jsx)("span", { className: j.YW, children: (0, p.m1)(n, M.default, G.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? j.XB : j.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: j.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, p.m1)(e, M.default, G.A);
        return null != t && t > 0
            ? V.intl.formatToPlainString(V.t.LYdVfN, { name: n, mentions: t })
            : V.intl.formatToPlainString(V.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(w, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class F extends l.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: j.zc,
            children: (0, i.jsx)(s.eu, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: a._3.SIZE_20,
                status: t,
                isMobile: n,
            }),
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            i = G.A.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = i ?? x.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            l = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(L, { className: j.qS, value: n })),
            (0, i.jsxs)("div", {
                className: j.UU,
                children: [
                    (0, i.jsx)("span", { className: j.YW, children: l }),
                    e,
                    (0, i.jsx)("span", { className: j.Xh, children: x.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? j.XB : j.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: j.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = x.Ay.getUserTag(t);
        return null != e && e > 0
            ? V.intl.formatToPlainString(V.t["6b9UrR"], { name: n, id: i, mentions: e })
            : V.intl.formatToPlainString(V.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(w, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class W extends l.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: j.xr,
            children: [
                (0, i.jsx)("div", {
                    className: j.zc,
                    children: (0, i.jsx)(m.A, { tabIndex: -1, className: j.Gt, game: t, size: j.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: j.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: l, id: r } = this.props;
        return (0, i.jsx)(w, {
            id: r,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: l,
            children: this.renderContent(),
        });
    }
}
function K(e) {
    let { game: t, onMouseEnter: n, onClick: l, onFocus: r, focused: s, id: a, inlineLabel: o, children: d } = e,
        { extraChromeEnabled: c } = b.A.useConfig({ location: "quickswitcher" });
    return (0, i.jsx)(w, {
        id: a,
        onMouseEnter: n,
        onClick: l,
        onFocus: r,
        focused: s,
        children: (0, i.jsxs)("div", {
            className: j.xr,
            children: [
                (0, i.jsx)("div", {
                    className: j.zc,
                    children: (0, i.jsx)(v.A, { game: t, iconClassName: j.bN, withBackground: c }),
                }),
                (0, i.jsxs)("div", {
                    className: j.UU,
                    children: [
                        (0, i.jsx)("span", { className: j.YW, children: t.name }),
                        null != o ? (0, i.jsx)("span", { className: j.N4, children: o }) : null,
                    ],
                }),
                (0, i.jsx)("div", { className: j.Lr, children: d }),
            ],
        }),
    });
}
class Y extends l.Component {
    render() {
        return (0, i.jsx)("div", {
            className: j.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: j.xr,
                children: (0, i.jsx)("div", { className: j.wx, children: this.props.children }),
            }),
        });
    }
}
class Z extends l.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: l } = this.props;
        if (null != n.inviteCode)
            ((e = V.intl.string(V.t.w6QG3F)), (t = (0, i.jsx)(o.f, { size: "xs", color: "currentColor" })));
        else {
            let l = (0, U.vu)(n.path);
            null == l || void 0 === l.messageId
                ? ((e = V.intl.string(V.t.qbSCqj)), (t = (0, i.jsx)(d.LinkIcon, { size: "xs", color: "currentColor" })))
                : (0, U.r9)(l)
                  ? ((e = V.intl.string(V.t["6Fd/j1"])), (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
                  : ((e = V.intl.string(V.t.jQRwp4)),
                    (t = (0, i.jsx)(u.LockIcon, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: j.xr,
            children: [
                (0, i.jsx)("div", { className: j.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: j.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(w, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
class z extends l.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: l } = this.props;
        switch (n.type) {
            case T.t1.SHOP:
                ((e = V.intl.string(V.t.pWG4ze)), (t = (0, i.jsx)(A.U, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.SHOP_ORBS_TAB:
                ((e = V.intl.string(V.t.fG3RIg)), (t = (0, i.jsx)(A.U, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.QUEST_ORBS:
                ((e = `${V.intl.string(V.t.ElYQFS)} ${V.intl.string(V.t.JALI2K)}`),
                    (t = (0, i.jsx)(E.r, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.NITRO_HOME:
                ((e = V.intl.string(V.t.Ipxkog)), (t = (0, i.jsx)(h.t, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.QUEST_HOME:
                ((e = V.intl.string(V.t.JALI2K)), (t = (0, i.jsx)(E.r, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.APPS_HOME:
                ((e = V.intl.string(V.t.PHjkRE)), (t = (0, i.jsx)(C.k, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.SETTINGS:
                ((e = n.label ?? V.intl.string(V.t["3D5yo/"])),
                    (t = (0, i.jsx)(_.SettingsIcon, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(g.H, { size: "xs", color: "currentColor" });
                break;
            default:
                ((e = n.id), (t = (0, i.jsx)(d.LinkIcon, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: j.xr,
            children: [
                (0, i.jsx)("div", { className: j.zc, children: t }),
                (0, i.jsx)("div", { className: j.UU, children: e }),
                (0, i.jsx)("div", { className: j.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(w, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: r,
            score: s,
            children: this.renderContent(),
        });
    }
}
