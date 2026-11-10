n.d(t, {
    lg: () => H,
    c3: () => Y,
    IH: () => B,
    nG: () => F,
    OS: () => G,
    Y9: () => K,
    vw: () => Z,
    N_: () => W,
    KJ: () => z,
});
var i = n(477900),
    r = n(582128),
    s = n(939249),
    l = n(97808),
    a = n(778712),
    o = n(685761),
    c = n(173936),
    d = n(99677),
    u = n(194261),
    h = n(34188),
    C = n(577473),
    E = n(403581),
    A = n(323384),
    _ = n(625903),
    p = n(659421),
    g = n(329308),
    m = n(571694),
    T = n(47167),
    N = n(713654),
    f = n(503698),
    I = n.n(f),
    x = n(62986);
let S = function (e) {
    let { value: t = 0, text: n, className: r, lowImportance: s, ...l } = e;
    return null != n
        ? (0, i.jsx)("div", { className: I()(x.i, r, s && x.H), ...l, children: n })
        : t > 0
          ? (0, i.jsx)("div", { className: I()(x.i, r, s && x.H), ...l, children: t })
          : null;
};
var O = n(769015),
    U = n(168017),
    v = n(106191),
    L = n(682163),
    R = n(376943),
    j = n(636585),
    D = n(71393),
    y = n(994500),
    b = n(287809),
    k = n(147036),
    M = n(427262),
    P = n(792996),
    w = n(445388);
class V extends r.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: r, id: l, "aria-label": a } = this.props;
        return (0, i.jsxs)(s.D, {
            role: "option",
            id: l,
            "aria-label": a,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: w.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [t, null != n ? (0, i.jsx)("div", { className: w.fN, children: 0 | n }) : null],
        });
    }
}
class G extends r.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: w._C,
            children: (0, i.jsx)(L.Ay, { tabIndex: -1, guild: e, size: L.Ay.Sizes.MINI, className: w.$f }),
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
        return P.intl.formatToPlainString(P.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class Y extends r.Component {
    static defaultProps = { unread: !1 };
    renderIcon() {
        let { channel: e } = this.props,
            t = (0, N.gU)(e);
        if (null == t) return null;
        let n = (0, k.Jg)(e) ?? "";
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
            { mentions: n, category: r, channel: s, isMentionLowImportance: l } = this.props;
        return (
            null != n && n > 0 && (e = (0, i.jsx)(S, { className: w.qS, value: n, lowImportance: l })),
            null != r && (t = (0, i.jsx)("span", { className: w.N4, children: (0, T.m1)(r, b.default, y.A) })),
            (0, i.jsxs)("div", {
                className: w.UU,
                children: [
                    (0, i.jsx)("span", { className: w.YW, children: (0, T.m1)(s, b.default, y.A) }),
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
            : (0, i.jsx)(j.A, {
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
            n = (0, T.m1)(e, b.default, y.A),
            i = (0, k.Jg)(e);
        return P.intl.formatToPlainString(P.t["Vw/da+"], { name: n, type: i, guild: t });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class F extends r.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: w.IU,
            children: (0, i.jsx)(l.eu, { src: (0, m.Y)(e), size: a._3.SIZE_20, "aria-hidden": !0, status: t }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t && t > 0 && (e = (0, i.jsx)(S, { className: w.qS, value: t })),
            (0, i.jsxs)("div", {
                className: w.UU,
                children: [(0, i.jsx)("span", { className: w.YW, children: (0, T.m1)(n, b.default, y.A) }), e],
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
            n = (0, T.m1)(e, b.default, y.A);
        return null != t && t > 0
            ? P.intl.formatToPlainString(P.t.LYdVfN, { name: n, mentions: t })
            : P.intl.formatToPlainString(P.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class z extends r.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: w.zc,
            children: (0, i.jsx)(l.eu, {
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
                (e = i ?? M.Ay.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n && n > 0 && (e = (0, i.jsx)(S, { className: w.qS, value: n })),
            (0, i.jsxs)("div", {
                className: w.UU,
                children: [
                    (0, i.jsx)("span", { className: w.YW, children: r }),
                    e,
                    (0, i.jsx)("span", { className: w.Xh, children: M.Ay.getUserTag(t) }),
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
            i = M.Ay.getUserTag(t);
        return null != e && e > 0
            ? P.intl.formatToPlainString(P.t["6b9UrR"], { name: n, id: i, mentions: e })
            : P.intl.formatToPlainString(P.t.GWYOAY, { name: n, id: i });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class H extends r.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", {
                    className: w.zc,
                    children: (0, i.jsx)(O.A, { tabIndex: -1, className: w.Gt, game: t, size: w.D0 }),
                }),
                t.name,
                (0, i.jsx)("div", { className: w.Lr, children: e }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: s } = this.props;
        return (0, i.jsx)(V, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent(),
        });
    }
}
function B(e) {
    let { game: t, onMouseEnter: n, onClick: r, onFocus: s, focused: l, id: a, inlineLabel: o, children: c } = e,
        { extraChromeEnabled: d } = U.A.useConfig({ location: "quickswitcher" });
    return (0, i.jsx)(V, {
        id: a,
        onMouseEnter: n,
        onClick: r,
        onFocus: s,
        focused: l,
        children: (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", {
                    className: w.zc,
                    children: (0, i.jsx)(v.A, { game: t, iconClassName: w.bN, withBackground: d }),
                }),
                (0, i.jsxs)("div", {
                    className: w.UU,
                    children: [
                        (0, i.jsx)("span", { className: w.YW, children: t.name }),
                        null != o ? (0, i.jsx)("span", { className: w.N4, children: o }) : null,
                    ],
                }),
                (0, i.jsx)("div", { className: w.Lr, children: c }),
            ],
        }),
    });
}
class K extends r.Component {
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
class W extends r.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: r } = this.props;
        if (null != n.inviteCode)
            ((e = P.intl.string(P.t.w6QG3F)), (t = (0, i.jsx)(o.MagicDoorIcon, { size: "xs", color: "currentColor" })));
        else {
            let r = (0, R.vu)(n.path);
            null == r || void 0 === r.messageId
                ? ((e = P.intl.string(P.t.qbSCqj)), (t = (0, i.jsx)(c.LinkIcon, { size: "xs", color: "currentColor" })))
                : (0, R.r9)(r)
                  ? ((e = P.intl.string(P.t["6Fd/j1"])),
                    (t = (0, i.jsx)(d.ChatArrowRightIcon, { size: "xs", color: "currentColor" })))
                  : ((e = P.intl.string(P.t.jQRwp4)),
                    (t = (0, i.jsx)(u.LockIcon, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", { className: w.zc, children: t }),
                e,
                (0, i.jsx)("div", { className: w.Lr, children: r }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
class Z extends r.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: r } = this.props;
        switch (n.type) {
            case g.t1.SHOP:
                ((e = P.intl.string(P.t.pWG4ze)), (t = (0, i.jsx)(h.ShopIcon, { size: "xs", color: "currentColor" })));
                break;
            case g.t1.SHOP_ORBS_TAB:
                ((e = P.intl.string(P.t.fG3RIg)), (t = (0, i.jsx)(h.ShopIcon, { size: "xs", color: "currentColor" })));
                break;
            case g.t1.QUEST_ORBS:
                ((e = `${P.intl.string(P.t.ElYQFS)} ${P.intl.string(P.t.JALI2K)}`),
                    (t = (0, i.jsx)(C.QuestsIcon, { size: "xs", color: "currentColor" })));
                break;
            case g.t1.NITRO_HOME:
                ((e = P.intl.string(P.t.Ipxkog)),
                    (t = (0, i.jsx)(E.NitroWheelIcon, { size: "xs", color: "currentColor" })));
                break;
            case g.t1.QUEST_HOME:
                ((e = P.intl.string(P.t.JALI2K)),
                    (t = (0, i.jsx)(C.QuestsIcon, { size: "xs", color: "currentColor" })));
                break;
            case g.t1.APPS_HOME:
                ((e = P.intl.string(P.t.PHjkRE)), (t = (0, i.jsx)(A.AppsIcon, { size: "xs", color: "currentColor" })));
                break;
            case g.t1.SETTINGS:
                ((e = n.label ?? P.intl.string(P.t["3D5yo/"])),
                    (t = (0, i.jsx)(_.SettingsIcon, { size: "xs", color: "currentColor" })));
                break;
            case g.t1.PLAYGROUND:
                if (((e = n.label ?? `${n.collectionId} Playground`), null != n.IconComponent)) {
                    let e = n.IconComponent;
                    t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
                } else t = (0, i.jsx)(p.PotionIcon, { size: "xs", color: "currentColor" });
                break;
            default:
                ((e = n.id), (t = (0, i.jsx)(c.LinkIcon, { size: "xs", color: "currentColor" })));
        }
        return (0, i.jsxs)("div", {
            className: w.xr,
            children: [
                (0, i.jsx)("div", { className: w.zc, children: t }),
                (0, i.jsx)("div", { className: w.UU, children: e }),
                (0, i.jsx)("div", { className: w.Lr, children: r }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: l, id: a } = this.props;
        return (0, i.jsx)(V, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: l,
            children: this.renderContent(),
        });
    }
}
