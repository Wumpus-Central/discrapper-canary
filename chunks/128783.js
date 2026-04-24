n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    s = n(675171),
    a = n(17928),
    r = n(95701),
    o = n(769591),
    c = n(517092),
    d = n(834730),
    u = n(821609),
    h = n(744898),
    m = n(110259),
    p = n(139286);
function g(e) {
    return (
        (0, p.A)({ type: m.ImpressionTypes.VIEW, name: m.ImpressionNames.NOTIFICATION_SETTING_UNREAD_NUDGE }, void 0, [
            e.id,
        ]),
        null
    );
}
var A = n(832712),
    f = n(543465),
    _ = n(477427),
    E = n(393432),
    C = n(652215),
    x = n(790782),
    b = n(355097),
    S = n(985018),
    I = n(927933);
function y(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, i.jsxs)("div", {
        className: I.l,
        children: [
            (0, i.jsx)(g, { id: t.id }),
            (0, i.jsx)("div", {
                className: I.p,
                children: (0, i.jsx)(d.E, { variant: "text-sm/medium", children: S.intl.format(S.t.P6Y2N1, {}) }),
            }),
            (0, i.jsx)(u.$, {
                variant: "secondary",
                text: S.intl.string(S.t.KyUKhT),
                icon: h.e,
                size: "sm",
                onClick: () => {
                    var e, i, l;
                    (e = t.guild_id),
                        (i = t.id),
                        (l = b.vv.UNREADS_ONLY_MENTIONS),
                        A.A.updateChannelOverrideSettings(
                            e,
                            i,
                            { flags: (0, E.mD)(f.Ay.getChannelIdFlags(e, i), l) },
                            _.G_.unreads(l === b.vv.UNREADS_ALL_MESSAGES ? x.e.ALL_MESSAGES : x.e.ONLY_MENTIONS),
                            { object: C.ZSU.NOTIFICATION_SETTING_UNREAD_NOTICE },
                        ),
                        n();
                },
            }),
        ],
    });
}
var T = n(228098),
    v = n(157259),
    N = n(503698),
    j = n.n(N),
    M = n(58149),
    R = n(954571),
    L = n(867455),
    D = n(406704),
    k = n(916168);
function P(e) {
    let { channel: t, narrow: n } = e,
        s = (0, D.lK)(t);
    return (
        l.useEffect(() => {
            R.default.track(C.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, M.H$)(t.getGuildId()),
                ...(0, M.dI)(t),
                banner_type: "thread",
            });
        }, [t]),
        (0, i.jsxs)("div", {
            className: j()(k.JD, { [k.sc]: n }),
            children: [
                (0, i.jsx)(d.E, {
                    className: k.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? S.intl.string(S.t["833FDn"]) : S.intl.string(S.t.rEeodK),
                }),
                s
                    ? (0, i.jsx)(u.$, {
                          variant: "secondary",
                          text: S.intl.string(S.t["0dvvEi"]),
                          onClick: () => {
                              R.default.track(C.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, M.H$)(t.getGuildId()),
                                  ...(0, M.dI)(t),
                                  banner_type: "thread",
                                  cta_type: "unarchive",
                              }),
                                  L.A.unarchiveThread(t, !1);
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
        s = (0, D.H_)(t);
    return (
        l.useEffect(() => {
            R.default.track(C.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, M.H$)(t.getGuildId()),
                ...(0, M.dI)(t),
                banner_type: "thread",
            });
        }, [t]),
        (0, i.jsxs)("div", {
            className: j()(k.JD, { [k.sc]: n }),
            children: [
                (0, i.jsx)(d.E, {
                    className: k.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? S.intl.string(S.t.E7oO8u) : S.intl.string(S.t["V/JF2N"]),
                }),
                s
                    ? (0, i.jsx)(u.$, {
                          variant: "secondary",
                          text: S.intl.string(S.t.zA9d1J),
                          onClick: () => {
                              R.default.track(C.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, M.H$)(t.getGuildId()),
                                  ...(0, M.dI)(t),
                                  banner_type: "thread",
                                  cta_type: "unlock",
                              }),
                                  L.A.unlockThread(t);
                          },
                          size: "sm",
                      })
                    : null,
            ],
        })
    );
}
var O = n(626360);
let w = l.memo(function (e) {
    let { channel: t, narrow: n } = e,
        d = (0, T.A)(t),
        u = (0, s.A)(),
        { showUnreadsNotice: h, clearUnreadsNotice: m } = (function (e) {
            let t = (0, o.os)("useShouldRenderBanner"),
                [n, i] = l.useState("");
            l.useEffect(() => {
                i("");
            }, [e.id]);
            let s = (0, a.bG)([c.A], () => c.A.getLastActionTime(e.id));
            l.useEffect(() => {
                !r.B4.has(e.type) || n === e.id || (t && c.A.maybeAutoUpgradeChannel(e.id) && i(e.id));
            }, [n, t, s, e]);
            let d = l.useCallback(() => i(""), []);
            return { showUnreadsNotice: n === e.id, clearUnreadsNotice: d };
        })(t);
    return t.isArchivedLockedThread()
        ? (0, i.jsx)(P, { channel: t, narrow: n })
        : t.isLockedThread()
          ? (0, i.jsx)(G, { channel: t, narrow: n })
          : h
            ? (0, i.jsx)(y, { channel: t, clearUnreadsNotice: m })
            : d && u.includes(O.i.OPT_IN_CHANNEL)
              ? (0, i.jsx)(v.A, { channel: t, narrow: n })
              : null;
});
