n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var l = n(442837),
    i = n(481060),
    a = n(264229),
    s = n(366980),
    o = n(603236),
    c = n(939863),
    u = n(984933),
    d = n(430824),
    g = n(341165),
    m = n(626135),
    x = n(572004),
    h = n(971130),
    v = n(230900),
    p = n(981631),
    j = n(388032),
    f = n(369702);
let { INVITE_OPTIONS_7_DAYS: b, INVITE_OPTIONS_UNLIMITED: y } = h.ZP;
function O(e) {
    var t, n, O;
    let { onClose: E, event: N } = e,
        C = null == N ? void 0 : N.guild_id,
        P = (0, l.e7)([u.ZP], () => {
            var e;
            return null != C ? (null == (e = u.ZP.getDefaultChannel(C)) ? void 0 : e.id) : null;
        }, [C]),
        S = (0, l.e7)([d.Z], () => d.Z.getGuild(C), [C]),
        { channel_id: I, id: Z } = null != N ? N : {},
        T = (0, l.e7)([g.Z], () => {
            let e = null != I ? I : P;
            return null == e ? null : g.Z.getInvite(e);
        }, [I, P]);
    if (null == N) return E(), null;
    let w = null != (t = null == S ? void 0 : S.vanityURLCode) ? t : null == T ? void 0 : T.code,
        D =
            null != w
                ? (0, a.tV)({
                      baseCode: w,
                      guildScheduledEventId: Z,
                  })
                : null,
        k = null == D || null == T,
        R = (0, s.Z)(null != D ? D : ""),
        _ = null != (n = null == T ? void 0 : T.maxAge) ? n : b.value,
        A = null != (O = null == T ? void 0 : T.maxUses) ? O : y.value;
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsx)(i.P3F, {
                onClick: E,
                className: f.close,
                "aria-label": j.intl.string(j.t.cpT0Cq),
                children: (0, r.jsx)(i.Dio, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, r.jsx)(c.Z, {
                children: (0, r.jsx)("div", {
                    className: f.iconContainer,
                    children: (0, r.jsx)(i.Que, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: f.icon,
                    }),
                }),
            }),
            (0, r.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                className: f.header,
                children: j.intl.string(j.t.UzNv7u),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: f.body,
                children: j.intl.string(j.t.UetJjH),
            }),
            (0, r.jsxs)("div", {
                className: f.invite,
                children: [
                    (0, r.jsx)(o.S, {
                        value: R,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (k) return;
                            (0, x.JG)(e);
                            let t = (0, v.xC)(N.entity_type);
                            m.default.track(p.rMx.COPY_INSTANT_INVITE, {
                                server: N.guild_id,
                                channel: I,
                                channel_type: t,
                                location: p.t4x.GUILD_EVENTS,
                                code: T.code,
                                guild_scheduled_event_id: null == N ? void 0 : N.id,
                            });
                        },
                    }),
                    (null == S ? void 0 : S.vanityURLCode) == null &&
                        (0, r.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: f.inviteDetail,
                            children: (0, h.Vg)(_, A),
                        }),
                ],
            }),
        ],
    });
}
