"use strict";
n.d(t, { aP: () => T, oJ: () => C }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    d = n(397927),
    c = n(565645),
    u = n(915089),
    m = n(375499),
    g = n(937773),
    x = n(508675),
    h = n(7584),
    _ = n(808728),
    A = n(841650),
    p = n(307731),
    f = n(985018),
    j = n(339884);
function N(e) {
    let { guildId: t, emojiData: n, onSelectEmoji: l } = e,
        r = s.useRef(null),
        a = (0, o.bG)([x.Ay], () => (null != n.id ? x.Ay.getCustomEmojiById(n.id) : void 0)),
        u = (0, o.bG)([_.Ay], () => _.Ay.getDefaultChannel(t)),
        A = s.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(g.A, {
                    pickerIntention: p.EmojiIntention.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: u,
                    closePopout: t,
                    onNavigateAway: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: i } = e;
                        null != n &&
                            l(
                                null != n.id
                                    ? { id: n.id, name: void 0 }
                                    : { id: void 0, name: n.optionallyDiverseSequence },
                            ),
                            i && t();
                    },
                });
            },
            [l, u],
        ),
        f = s.useMemo(
            () =>
                null == a && null == n.name
                    ? null
                    : function () {
                          return (0, i.jsx)(c.A, {
                              className: j.Zg,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: a?.animated,
                          });
                      },
            [n, a],
        ),
        N = "";
    return (
        null != a ? (N = `:${a.name}:`) : null != n.name && (N = h.Ay.convertSurrogateToName(n.name)),
        (0, i.jsx)(d.YNO, {
            targetElementRef: r,
            animation: d.YNO.Animation.NONE,
            position: "top",
            renderPopout: A,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsxs)("div", {
                    ref: r,
                    className: j.oc,
                    ...e,
                    children: [
                        (0, i.jsx)(m.A, { className: j.Z8, active: n, tabIndex: 0, renderButtonContents: f }),
                        (0, i.jsx)(d.Text, { variant: "text-md/normal", className: j.at, children: N }),
                    ],
                });
            },
        })
    );
}
function E(e) {
    let {
            guildId: t,
            initialData: n,
            benefitTypeInput: l,
            descriptionPlaceholder: r,
            canSubmit: o,
            onSave: c,
            onDelete: m,
            transitionState: g,
            onClose: x,
        } = e,
        h = (0, u.GV)(),
        [_, A] = s.useState(n?.description ?? ""),
        [p, j] = s.useState(() => ({ id: n?.emoji_id, name: n?.emoji_name })),
        E = o && "" !== _ && (null != p.id || null != p.name);
    function C(e) {
        e.preventDefault(), E && (c({ description: _, emojiId: p.id, emojiName: p.name }), x());
    }
    let T = [{ text: f.intl.string(f.t["ETE/oC"]), variant: "secondary", onClick: x }];
    return (
        null != m &&
            T.push({
                text: f.intl.string(f.t.oyYWHE),
                variant: "critical-secondary",
                onClick: () => {
                    m(), x();
                },
                icon: d.ucK,
            }),
        T.push({
            text: null == n ? f.intl.string(f.t.OYkgVk) : f.intl.string(f.t["R3BPH+"]),
            variant: "primary",
            onClick: C,
            disabled: !E,
        }),
        (0, i.jsx)("form", {
            onSubmit: C,
            children: (0, i.jsx)(a.Modal, {
                transitionState: g,
                onClose: x,
                title: f.intl.string(f.t["2qf9EI"]),
                actions: T,
                children: (0, i.jsxs)(d.BJc, {
                    gap: "md",
                    children: [
                        l,
                        (0, i.jsx)(d.fs1, {
                            label: f.intl.string(f.t["1Ts7QP"]),
                            placeholder: r,
                            value: _,
                            rows: 1,
                            autosize: !0,
                            onChange: A,
                            "aria-labelledby": h,
                        }),
                        (0, i.jsx)(a.D0$, {
                            label: f.intl.string(f.t.sMOuuS),
                            children: (0, i.jsx)(N, { guildId: t, emojiData: p, onSelectEmoji: j }),
                        }),
                    ],
                }),
            }),
        })
    );
}
function C(e) {
    let { guildId: t, omitChannelIds: n, initialData: l, onSave: a, onDelete: o, transitionState: c, onClose: m } = e,
        [g, x] = s.useState(l?.ref_id),
        h = (0, u.GV)(),
        _ = (0, i.jsxs)(d.BJc, {
            gap: 16,
            children: [
                (0, i.jsx)(d.po8, { messageType: d.YCn.WARNING, children: f.intl.string(f.t.xunxCo) }),
                (0, i.jsx)(A.A, {
                    label: f.intl.string(f.t.GK18KJ),
                    guildId: t,
                    value: g,
                    initialChannelId: l?.ref_id,
                    omitChannelIds: n,
                    onChange: function (e) {
                        x(e);
                    },
                    "aria-labelledby": h,
                }),
            ],
        });
    return (0, i.jsx)(E, {
        guildId: t,
        initialData: l,
        benefitTypeInput: _,
        descriptionPlaceholder: f.intl.string(f.t.J8O1Lp),
        canSubmit: null != g,
        onSave: function (e) {
            r()(null != g, "Cannot submit null channel"), a({ ...e, channelId: g });
        },
        transitionState: c,
        onClose: m,
        onDelete: o,
    });
}
function T(e) {
    let { initialData: t, onSave: n, transitionState: l, onClose: a, onDelete: o, guildId: c } = e,
        [m, g] = s.useState(t?.name ?? ""),
        x = (0, u.GV)(),
        h = (0, i.jsx)(d.fs1, {
            label: f.intl.string(f.t.NPOJrU),
            placeholder: f.intl.string(f.t.NPOJrU),
            value: m,
            rows: 1,
            onChange: function (e) {
                g(e);
            },
            "aria-labelledby": x,
        });
    return (0, i.jsx)(E, {
        guildId: c,
        initialData: t,
        benefitTypeInput: h,
        descriptionPlaceholder: f.intl.string(f.t.ucP4Tt),
        canSubmit: "" !== m,
        onSave: function (e) {
            r()("" !== m, "Cannot submit empty name"), n({ ...e, name: m });
        },
        transitionState: l,
        onClose: a,
        onDelete: o,
    });
}
