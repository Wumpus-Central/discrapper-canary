n.d(t, {
    KJ: () => F,
    N_: () => Y,
    vw: () => Z,
    lg: () => k,
    nG: () => B,
    c3: () => H,
    OS: () => j,
    Y9: () => K,
    IH: () => W,
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
    h = n(577473),
    E = n(403581),
    C = n(323384),
    g = n(625903),
    _ = n(659421),
    T = n(329308),
    I = n(571694),
    p = n(47167),
    N = n(713654),
    S = n(503698),
    f = n.n(S),
    m = n(62986);
let O = function (e) {
    let { value: t = 0, text: n, className: l, lowImportance: r, ...s } = e;
    return null != n
        ? (0, i.jsx)("div", { className: f()(m.i, l, r && m.H), ...s, children: n })
        : t > 0
          ? (0, i.jsx)("div", { className: f()(m.i, l, r && m.H), ...s, children: t })
          : null;
};
var L = n(769015),
    b = n(106191),
    v = n(548118),
    R = n(376943),
    U = n(636585),
    D = n(71393),
    y = n(994500),
    G = n(287809),
    M = n(147036),
    P = n(427262),
    x = n(375708),
    w = n(445388);
class V extends l.PureComponent {
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
            className: w.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: l,
            children: [t, null != n ? (0, i.jsx)("div", { className: w.fN, children: 0 | n }) : null],
        });
    }
}
class j extends l.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: w._C,
            children: (0, i.jsx)(v.Ay, { tabIndex: -1, guild: e, size: v.Ay.Sizes.MINI, className: w.$f }),
        });
    }
    renderName() {
        let { guild: e, inlineLabel: t } = this.props;
        return (0, i.jsxs)("div", {
            className: w.UU,
            children: [
                (0, i.jsx)("span", { className: w.YW, children: e.name }),
                null != t ? (0, i.jsx)("span", { className: w.N4, children: t }) : null,
            ],
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? w.XB : w.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: w.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return x.intl.formatToPlainString(x.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(V, {
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
class H extends l.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, N.gU)(e);
        if (null == t) return null;
        let n = (0, M.Jg)(e) ?? "";
        return (0, i.jsx)("div", {
            className: w.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, { className: w.Kk, size: "xs", color: "currentColor" }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: l, channel: r, isMentionLowImportance: s } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(O, { className: w.qS, value: n, lowImportance: s })),
            null != l && (t = (0, i.jsx)("span", { className: w.N4, children: (0, p.m1)(l, G.default, y.A) })),
            (0, i.jsxs)("div", {
                className: w.UU,
                children: [
                    (0, i.jsx)("span", { className: w.YW, children: (0, p.m1)(r, G.default, y.A) }),
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
            : (0, i.jsx)(U.A, {
                  className: w.x7,
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
            className: e || (null != t && t > 0) ? w.XB : w.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: w.Lr, children: n })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e } = this.props,
            t = D.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, p.m1)(e, G.default, y.A),
            i = (0, M.Jg)(e);
        return x.intl.formatToPlainString(x.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(V, {
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
            className: w.IU,
            children: (0, i.jsx)(s.eu, { src: (0, I.Y)(e), size: a._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(O, { className: w.qS, value: t })),
            (0, i.jsxs)("div", {
                className: w.UU,
                children: [(0, i.jsx)("span", { className: w.YW, children: (0, p.m1)(n, G.default, y.A) }), e],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? w.XB : w.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: w.Lr, children: t })],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, p.m1)(e, G.default, y.A);
        return null != t && t > 0
            ? x.intl.formatToPlainString(x.t.LYdVfN, { name: n, mentions: t })
            : x.intl.formatToPlainString(x.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(V, {
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
            className: w.zc,
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
            i = y.A.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = i ?? P.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            l = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(O, { className: w.qS, value: n })),
            (0, i.jsxs)("div", {
                className: w.UU,
                children: [
                    (0, i.jsx)("span", { className: w.YW, children: l }),
                    e,
                    (0, i.jsx)("span", { className: w.Xh, children: P.Ay.getUserTag(t) }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? w.XB : w.xr,
            children: [this.renderIcon(), this.renderName(), (0, i.jsx)("div", { className: w.Lr, children: e })],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = P.Ay.getUserTag(t);
        return null != e && e > 0
            ? x.intl.formatToPlainString(x.t["6b9UrR"], { name: n, id: i, mentions: e })
            : x.intl.formatToPlainString(x.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(V, {
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
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", {
                    className: w.zc,
                    children: (0, i.jsx)(L.A, { tabIndex: -1, className: w.Gt, game: t, size: w.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: w.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: l, id: r } = this.props;
        return (0, i.jsx)(V, {
            id: r,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: l,
            children: this.renderContent(),
        });
    }
}
function W(e) {
    let { game: t, onMouseEnter: n, onClick: l, onFocus: r, focused: s, id: a, inlineLabel: o, children: d } = e;
    return (0, i.jsx)(V, {
        id: a,
        onMouseEnter: n,
        onClick: l,
        onFocus: r,
        focused: s,
        children: (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", { className: w.zc, children: (0, i.jsx)(b.A, { game: t, iconClassName: w.bN }) }),
                (0, i.jsxs)("div", {
                    className: w.UU,
                    children: [
                        (0, i.jsx)("span", { className: w.YW, children: t.name }),
                        null != o ? (0, i.jsx)("span", { className: w.N4, children: o }) : null,
                    ],
                }),
                (0, i.jsx)("div", { className: w.Lr, children: d }),
            ],
        }),
    });
}
class K extends l.Component {
    render() {
        return (0, i.jsx)("div", {
            className: w.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: w.xr,
                children: (0, i.jsx)("div", { className: w.wx, children: this.props.children }),
            }),
        });
    }
}
class Y extends l.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: l } = this.props;
        if (null != n.inviteCode)
            ((e = x.intl.string(x.t.w6QG3F)), (t = (0, i.jsx)(o.f, { size: "xs", color: "currentColor" })));
        else {
            let l = (0, R.vu)(n.path);
            null == l || void 0 === l.messageId
                ? ((e = x.intl.string(x.t.qbSCqj)), (t = (0, i.jsx)(d.LinkIcon, { size: "xs", color: "currentColor" })))
                : (0, R.r9)(l)
                  ? ((e = x.intl.string(x.t["6Fd/j1"])), (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
                  : ((e = x.intl.string(x.t.jQRwp4)),
                    (t = (0, i.jsx)(u.LockIcon, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", { className: w.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: w.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(V, {
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
class Z extends l.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: l } = this.props;
        switch (n.type) {
            case T.t1.SHOP:
                ((e = x.intl.string(x.t.pWG4ze)), (t = (0, i.jsx)(A.U, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.SHOP_ORBS_TAB:
                ((e = x.intl.string(x.t.EBYkzk)), (t = (0, i.jsx)(A.U, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.QUEST_ORBS:
                ((e = `${x.intl.string(x.t.ElYQFS)} ${x.intl.string(x.t.JALI2K)}`),
                    (t = (0, i.jsx)(h.r, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.NITRO_HOME:
                ((e = x.intl.string(x.t.Ipxkog)), (t = (0, i.jsx)(E.t, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.QUEST_HOME:
                ((e = x.intl.string(x.t.JALI2K)), (t = (0, i.jsx)(h.r, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.APPS_HOME:
                ((e = x.intl.string(x.t.PHjkRE)), (t = (0, i.jsx)(C.k, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.SETTINGS:
                ((e = n.label ?? x.intl.string(x.t["3D5yo/"])),
                    (t = (0, i.jsx)(g.SettingsIcon, { size: "xs", color: "currentColor" })));
                break;
            case T.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(_.H, { size: "xs", color: "currentColor" });
                break;
            default:
                ((e = n.id), (t = (0, i.jsx)(d.LinkIcon, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", { className: w.zc, children: t }),
                (0, i.jsx)("div", { className: w.UU, children: e }),
                (0, i.jsx)("div", { className: w.Lr, children: l }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: l, focused: r, score: s, id: a } = this.props;
        return (0, i.jsx)(V, {
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
