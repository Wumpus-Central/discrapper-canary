n.d(t, { Z: () => E });
var l = n(951288);
n(647438);
var r = n(442837),
    i = n(481060),
    a = n(264229),
    s = n(366980),
    o = n(603236),
    c = n(939863),
    u = n(984933),
    d = n(430824),
    x = n(341165),
    m = n(626135),
    g = n(572004),
    v = n(971130),
    h = n(230900),
    p = n(981631),
    f = n(388032),
    j = n(369702);
let { INVITE_OPTIONS_7_DAYS: y, INVITE_OPTIONS_UNLIMITED: b } = v.ZP;
function E(e) {
    var t, n, E;
    let { onClose: N, event: O } = e,
        C = null == O ? void 0 : O.guild_id,
        S = (0, r.e7)([u.ZP], () => {
            var e;
            return null != C ? (null == (e = u.ZP.getDefaultChannel(C)) ? void 0 : e.id) : null;
        }, [C]),
        T = (0, r.e7)([d.Z], () => d.Z.getGuild(C), [C]),
        { channel_id: Z, id: I } = null != O ? O : {},
        P = (0, r.e7)([x.Z], () => {
            let e = null != Z ? Z : S;
            return null == e ? null : x.Z.getInvite(e);
        }, [Z, S]);
    if (null == O) return N(), null;
    let w = null != (t = null == T ? void 0 : T.vanityURLCode) ? t : null == P ? void 0 : P.code,
        D =
            null != w
                ? (0, a.tV)({
                      baseCode: w,
                      guildScheduledEventId: I,
                  })
                : null,
        A = null == D || null == P,
        R = (0, s.Z)(null != D ? D : ""),
        L = null != (n = null == P ? void 0 : P.maxAge) ? n : y.value,
        _ = null != (E = null == P ? void 0 : P.maxUses) ? E : b.value;
    return (0, l.jsxs)("div", {
        className: j.container,
        children: [
            (0, l.jsx)(i.P3F, {
                onClick: N,
                className: j.close,
                "aria-label": f.intl.string(f.t.cpT0Cg),
                children: (0, l.jsx)(i.Dio, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, l.jsx)(c.Z, {
                children: (0, l.jsx)("div", {
                    className: j.iconContainer,
                    children: (0, l.jsx)(i.Que, {
                        size: "custom",
                        color: "currentColor",
                        height: 30,
                        width: 30,
                        className: j.icon,
                    }),
                }),
            }),
            (0, l.jsx)(i.X6q, {
                variant: "heading-xl/semibold",
                className: j.header,
                children: f.intl.string(f.t.UzNv7u),
            }),
            (0, l.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: j.body,
                children: f.intl.string(f.t.UetJjI),
            }),
            (0, l.jsxs)("div", {
                className: j.invite,
                children: [
                    (0, l.jsx)(o.S, {
                        value: R,
                        autoFocus: !1,
                        onCopy: (e) => {
                            if (A) return;
                            (0, g.JG)(e);
                            let t = (0, h.xC)(O.entity_type);
                            m.default.track(p.rMx.COPY_INSTANT_INVITE, {
                                server: O.guild_id,
                                channel: Z,
                                channel_type: t,
                                location: p.t4x.GUILD_EVENTS,
                                code: P.code,
                                guild_scheduled_event_id: null == O ? void 0 : O.id,
                            });
                        },
                    }),
                    (null == T ? void 0 : T.vanityURLCode) == null &&
                        (0, l.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: j.inviteDetail,
                            children: (0, v.Vg)(L, _),
                        }),
                ],
            }),
        ],
    });
}
