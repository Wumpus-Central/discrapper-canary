n.d(t, { A: () => w });
var l = n(477900),
    i = n(582128),
    s = n(675171),
    a = n(855986),
    r = n(95701),
    o = n(769591),
    c = n(496990),
    d = n(834730),
    u = n(821609),
    h = n(744898),
    m = n(613412),
    g = n(139286);
function p(e) {
    return (
        (0, g.A)({ type: m.ImpressionTypes.VIEW, name: m.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE }, void 0, [
            e.id,
        ]),
        null
    );
}
var A = n(832712),
    f = n(543465),
    C = n(477427),
    E = n(393432),
    x = n(652215),
    I = n(790782),
    S = n(355097),
    y = n(792996),
    b = n(113528);
function _(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, l.jsxs)("div", {
        className: b.l,
        children: [
            (0, l.jsx)(p, { id: t.id }),
            (0, l.jsx)("div", {
                className: b.p,
                children: (0, l.jsx)(d.E, { variant: "body-sm/medium", children: y.intl.format(y.t.P6Y2N1, {}) }),
            }),
            (0, l.jsx)(u.$, {
                variant: "secondary",
                text: y.intl.string(y.t.KyUKhT),
                icon: h.UndoIcon,
                size: "sm",
                onClick: () => {
                    var e, l, i;
                    ((e = t.guild_id),
                        (l = t.id),
                        (i = S.vv.UNREADS_ONLY_MENTIONS),
                        A.A.updateChannelOverrideSettings({
                            guildId: e,
                            channelId: l,
                            settings: { flags: (0, E.mD)(f.Ay.getChannelIdFlags(e, l), i) },
                            label: C.G_.unreads(i === S.vv.UNREADS_ALL_MESSAGES ? I.e.ALL_MESSAGES : I.e.ONLY_MENTIONS),
                            location: { object: x.ZSU.NOTIFICATION_SETTING_UNREAD_NOTICE },
                        }),
                        n());
                },
            }),
        ],
    });
}
var j = n(228098),
    v = n(157259),
    T = n(284305),
    N = n(503698),
    M = n.n(N),
    R = n(149468),
    D = n(129230),
    k = n(7909),
    L = n(406704),
    P = n(215741);
function O(e) {
    let { channel: t, narrow: n } = e,
        s = (0, L.lK)(t);
    return (
        i.useEffect(() => {
            D.default.track(x.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, R.H$)(t.getGuildId()),
                ...(0, R.dI)(t),
                banner_type: "thread",
            });
        }, [t]),
        (0, l.jsxs)("div", {
            className: M()(P.JD, { [P.sc]: n }),
            children: [
                (0, l.jsx)(d.E, {
                    className: P.E5,
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? y.intl.string(y.t["833FDn"]) : y.intl.string(y.t.rEeodK),
                }),
                s
                    ? (0, l.jsx)(u.$, {
                          variant: "secondary",
                          text: y.intl.string(y.t["0dvvEi"]),
                          onClick: function () {
                              (D.default.track(x.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, R.H$)(t.getGuildId()),
                                  ...(0, R.dI)(t),
                                  banner_type: "thread",
                                  cta_type: "unarchive",
                              }),
                                  k.A.unarchiveThread(t, !1));
                          },
                          size: "sm",
                      })
                    : null,
            ],
        })
    );
}
function G(e) {
    let { channel: t, narrow: n } = e,
        s = (0, L.H_)(t);
    return (
        i.useEffect(() => {
            D.default.track(x.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, R.H$)(t.getGuildId()),
                ...(0, R.dI)(t),
                banner_type: "thread",
            });
        }, [t]),
        (0, l.jsxs)("div", {
            className: M()(P.JD, { [P.sc]: n }),
            children: [
                (0, l.jsx)(d.E, {
                    className: P.E5,
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? y.intl.string(y.t.E7oO8u) : y.intl.string(y.t["V/JF2N"]),
                }),
                s
                    ? (0, l.jsx)(u.$, {
                          variant: "secondary",
                          text: y.intl.string(y.t.zA9d1J),
                          onClick: function () {
                              (D.default.track(x.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, R.H$)(t.getGuildId()),
                                  ...(0, R.dI)(t),
                                  banner_type: "thread",
                                  cta_type: "unlock",
                              }),
                                  k.A.unlockThread(t));
                          },
                          size: "sm",
                      })
                    : null,
            ],
        })
    );
}
var U = n(626360);
let w = i.memo(function (e) {
    let { channel: t, narrow: n } = e,
        d = (0, j.A)(t),
        u = (0, s.A)(),
        { showUnreadsNotice: h, clearUnreadsNotice: m } = (function (e) {
            let t = (0, o.os)("useShouldRenderBanner"),
                [n, l] = i.useState("");
            i.useEffect(() => {
                l("");
            }, [e.id]);
            let s = (0, a.bG)([c.A], () => c.A.getLastActionTime(e.id));
            i.useEffect(() => {
                !r.B4.has(e.type) || n === e.id || (t && c.A.maybeAutoUpgradeChannel(e.id) && l(e.id));
            }, [n, t, s, e]);
            let d = i.useCallback(() => l(""), []);
            return { showUnreadsNotice: n === e.id, clearUnreadsNotice: d };
        })(t),
        g = (0, T.GH)(t, "channel_chat_notice");
    return t.isMediaThread()
        ? null
        : t.isArchivedLockedThread()
          ? (0, l.jsx)(O, { channel: t, narrow: n })
          : t.isLockedThread()
            ? (0, l.jsx)(G, { channel: t, narrow: n })
            : h
              ? (0, l.jsx)(_, { channel: t, clearUnreadsNotice: m })
              : g.visible
                ? (0, l.jsx)(T.KT, { channel: t, onDismiss: g.dismiss })
                : d && u.includes(U.i.OPT_IN_CHANNEL)
                  ? (0, l.jsx)(v.A, { channel: t, narrow: n })
                  : null;
});
