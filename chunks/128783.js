n.d(t, { A: () => U });
var l = n(627968),
    i = n(64700),
    s = n(675171),
    a = n(17928),
    r = n(95701),
    o = n(769591),
    c = n(517092),
    d = n(834730),
    u = n(821609),
    h = n(744898),
    m = n(562708),
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
    x = n(393432),
    E = n(652215),
    S = n(790782),
    _ = n(355097),
    j = n(375708),
    I = n(927933);
function y(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, l.jsxs)("div", {
        className: I.l,
        children: [
            (0, l.jsx)(p, { id: t.id }),
            (0, l.jsx)("div", {
                className: I.p,
                children: (0, l.jsx)(d.E, { variant: "text-sm/medium", children: j.intl.format(j.t.P6Y2N1, {}) }),
            }),
            (0, l.jsx)(u.$, {
                variant: "secondary",
                text: j.intl.string(j.t.KyUKhT),
                icon: h.e,
                size: "sm",
                onClick: () => {
                    var e, l, i;
                    (e = t.guild_id),
                        (l = t.id),
                        (i = _.vv.UNREADS_ONLY_MENTIONS),
                        A.A.updateChannelOverrideSettings(
                            e,
                            l,
                            { flags: (0, x.mD)(f.Ay.getChannelIdFlags(e, l), i) },
                            C.G_.unreads(i === _.vv.UNREADS_ALL_MESSAGES ? S.e.ALL_MESSAGES : S.e.ONLY_MENTIONS),
                            { object: E.ZSU.NOTIFICATION_SETTING_UNREAD_NOTICE },
                        ),
                        n();
                },
            }),
        ],
    });
}
var v = n(228098),
    b = n(157259),
    N = n(503698),
    T = n.n(N),
    M = n(95561),
    R = n(174459),
    D = n(867455),
    L = n(406704),
    O = n(916168);
function k(e) {
    let { channel: t, narrow: n } = e,
        s = (0, L.lK)(t);
    return (
        i.useEffect(() => {
            R.default.track(E.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, M.H$)(t.getGuildId()),
                ...(0, M.dI)(t),
                banner_type: "thread",
            });
        }, [t]),
        (0, l.jsxs)("div", {
            className: T()(O.JD, { [O.sc]: n }),
            children: [
                (0, l.jsx)(d.E, {
                    className: O.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? j.intl.string(j.t["833FDn"]) : j.intl.string(j.t.rEeodK),
                }),
                s
                    ? (0, l.jsx)(u.$, {
                          variant: "secondary",
                          text: j.intl.string(j.t["0dvvEi"]),
                          onClick: () => {
                              R.default.track(E.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, M.H$)(t.getGuildId()),
                                  ...(0, M.dI)(t),
                                  banner_type: "thread",
                                  cta_type: "unarchive",
                              }),
                                  D.A.unarchiveThread(t, !1);
                          },
                          size: "sm",
                      })
                    : null,
            ],
        })
    );
}
function P(e) {
    let { channel: t, narrow: n } = e,
        s = (0, L.H_)(t);
    return (
        i.useEffect(() => {
            R.default.track(E.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, M.H$)(t.getGuildId()),
                ...(0, M.dI)(t),
                banner_type: "thread",
            });
        }, [t]),
        (0, l.jsxs)("div", {
            className: T()(O.JD, { [O.sc]: n }),
            children: [
                (0, l.jsx)(d.E, {
                    className: O.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? j.intl.string(j.t.E7oO8u) : j.intl.string(j.t["V/JF2N"]),
                }),
                s
                    ? (0, l.jsx)(u.$, {
                          variant: "secondary",
                          text: j.intl.string(j.t.zA9d1J),
                          onClick: () => {
                              R.default.track(E.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, M.H$)(t.getGuildId()),
                                  ...(0, M.dI)(t),
                                  banner_type: "thread",
                                  cta_type: "unlock",
                              }),
                                  D.A.unlockThread(t);
                          },
                          size: "sm",
                      })
                    : null,
            ],
        })
    );
}
var G = n(626360);
let U = i.memo(function (e) {
    let { channel: t, narrow: n } = e,
        d = (0, v.A)(t),
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
        })(t);
    return t.isMediaThread()
        ? null
        : t.isArchivedLockedThread()
          ? (0, l.jsx)(k, { channel: t, narrow: n })
          : t.isLockedThread()
            ? (0, l.jsx)(P, { channel: t, narrow: n })
            : h
              ? (0, l.jsx)(y, { channel: t, clearUnreadsNotice: m })
              : d && u.includes(G.i.OPT_IN_CHANNEL)
                ? (0, l.jsx)(b.A, { channel: t, narrow: n })
                : null;
});
