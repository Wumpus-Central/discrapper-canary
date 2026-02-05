"use strict";
n.d(t, { A: () => $ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(696292),
    o = n(990078),
    l = n(397927),
    u = n(541806),
    c = n(765379),
    d = n(672979),
    _ = n(960076),
    f = n(793574),
    p = n(688810),
    h = n(939341),
    m = n(662010),
    g = n(623671),
    E = n(365185),
    A = n(915089),
    I = n(886019),
    T = n(559405),
    y = n(753845),
    S = n(345942),
    v = n(82149),
    C = n(92240),
    b = n(257367),
    N = n(317572),
    R = n(53257),
    O = n(657331),
    D = n(939496),
    L = n(964195),
    w = n(167272),
    x = n(282197),
    P = n(624951),
    M = n(584904),
    k = n(351638),
    U = n(531648),
    G = n(910607),
    V = n(753713),
    F = n(8738),
    B = n(707794),
    j = n(518477),
    H = n(652215),
    Y = n(360469),
    W = n(996988),
    K = n(985018),
    z = n(380297);
function $(e) {
    let {
            user: t,
            currentUser: n,
            activity: i,
            application: $,
            voiceGuild: q,
            voiceChannel: Z,
            className: Q,
            onClose: X,
            appContext: J,
        } = e,
        ee = (0, A.GV)(),
        et = (0, A.GV)(),
        { analyticsLocations: en } = (0, p.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: er } = (0, D.E)(),
        ei = (0, E.A)({ activity: i, user: t }),
        ea = (0, C.A)({ display: "live", user: t, activity: i, entry: ei, analyticsLocations: en }),
        es = (0, b.A)({ userId: t.id, onAction: ea }),
        eo = (0, N.A)(i),
        el = null != eo.text && "" !== eo.text,
        { largeImage: eu, smallImage: ec } = (0, h.XN)(i, $),
        ed = (0, B.A)({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: i,
            application: $,
            entry: ei,
            onClose: X,
        }),
        e_ = () =>
            i.type !== H.$pd.HANG_STATUS || t.id !== n.id || null == Z
                ? null
                : (0, r.jsx)(o.m, { text: K.intl.string(K.t.QSOBaq), children: (0, r.jsx)(l.mir, { size: "xxs" }) }),
        ef = () => {
            let e = (0, u.A)(i) ? "crunchyroll" : "default",
                n = er === W.d.MODAL_V2 ? g.w.SIZE_100 : g.w.SIZE_60;
            return i.type === H.$pd.HANG_STATUS
                ? (0, r.jsx)(T.A, {
                      userId: t.id,
                      size: er !== W.d.MODAL_V2 ? 60 : 100,
                      hangStatusActivity: i,
                      className: a()(z.W9, z.Sl, { [z.EX]: er !== W.d.MODAL_V2 }),
                  })
                : null == ed
                  ? (0, r.jsx)(g.d, { image: eu, smallImage: ec, size: n, aspectRatio: e, className: z.Sl })
                  : (0, r.jsx)(g.d, {
                        image: eu,
                        smallImage: ec,
                        size: n,
                        className: z.mM,
                        aspectRatio: e,
                        onClick: (e) => {
                            ea({ action: "PRESS_IMAGE" }), ed(e);
                        },
                    });
        },
        ep = () =>
            i.type === H.$pd.HANG_STATUS
                ? (0, r.jsx)(U.Q, { variant: "heading-sm/semibold", text: (0, I.Au)(t.id, i), id: ee })
                : (0, _.A)(i) && null != Z
                  ? (0, r.jsxs)("div", {
                        className: z.FH,
                        children: [
                            (0, r.jsx)(l.HKD, { size: "xxs", color: l.LU0.colors.TEXT_DEFAULT, className: z.Ow }),
                            (0, r.jsx)(U.Q, { variant: "heading-sm/semibold", text: Z.name, id: ee }),
                        ],
                    })
                  : (0, d.A)(i) || (0, v.Cy)(i)
                    ? (0, r.jsx)(U.Q, { variant: "heading-sm/semibold", text: i.name, id: ee })
                    : null != i.details
                      ? (0, r.jsx)(m.O, {
                            href: i.details_url,
                            children: (0, r.jsx)(U.Q, { variant: "heading-sm/semibold", text: i.details, id: ee }),
                        })
                      : (0, r.jsx)(U.Q, { variant: "heading-sm/semibold", text: i.name, id: ee }),
        eh = () =>
            i.type === H.$pd.HANG_STATUS
                ? null
                : (0, _.A)(i) && null != q
                  ? (0, r.jsx)(U.A, {
                        variant: "text-xs/normal",
                        text: K.intl.formatToPlainString(K.t["hq/Qze"], { guildName: q.name }),
                        onClick: () => {
                            (0, S.u)(q.id), ea({ action: "OPEN_VOICE_GUILD" }), X?.();
                        },
                    })
                  : (0, d.A)(i)
                    ? (0, r.jsx)(m.O, {
                          href: i.details_url,
                          children: (0, r.jsx)(U.A, { variant: "text-xs/normal", text: i.details }),
                      })
                    : (0, v.Cy)(i)
                      ? (0, r.jsx)(U.A, { variant: "text-xs/normal", text: i?.assets?.small_text })
                      : (0, r.jsx)(m.O, {
                            href: i.state_url,
                            children: (0, r.jsx)(U.A, { variant: "text-xs/normal", text: i.state }),
                        }),
        em = () => {
            if (i.type === H.$pd.WATCHING) return null;
            if ((0, d.A)(i)) return eg();
            if ((0, v.Cy)(i) && i.party?.size != null && i.party?.size.length >= 2) {
                let e = K.intl.formatToPlainString(K.t["JC/3xw"], {
                    numSpeakers: i.party?.size[0],
                    numListeners: i.party?.size[1] - i.party?.size[0],
                });
                return (0, r.jsx)(U.A, { variant: "text-xs/normal", text: e });
            }
            return i.assets?.large_text != null
                ? (0, r.jsx)(m.O, {
                      href: i.assets?.large_url,
                      children: (0, r.jsx)(U.A, { text: i.assets?.large_text, variant: "text-xs/normal" }),
                  })
                : null;
        },
        eg = () =>
            i.party?.size == null && i.application_id === Y.I4
                ? (0, r.jsxs)("div", {
                      className: z.CI,
                      children: [
                          (0, r.jsx)(m.O, {
                              href: i.state_url,
                              children: (0, r.jsx)(U.A, { variant: "text-xs/normal", text: i.state }),
                          }),
                          (0, r.jsx)(U.A, {
                              variant: "text-xs/normal",
                              text: K.intl.formatToPlainString(K.t["u//9By"], {
                                  count: "0",
                                  max: $?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, c.A)(i) && i.party?.size != null && i.party?.size.length >= 2
                  ? (0, r.jsxs)("div", {
                        className: z.CI,
                        children: [
                            (0, r.jsx)(m.O, {
                                href: i.state_url,
                                children: (0, r.jsx)(U.A, { variant: "text-xs/normal", text: i.state }),
                            }),
                            (0, r.jsx)(U.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? K.intl.formatToPlainString(K.t.IM4J4e, { count: i.party.size[0] })
                                        : K.intl.formatToPlainString(K.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, r.jsx)(m.O, {
                          href: i.state_url,
                          children: (0, r.jsx)(U.A, { variant: "text-xs/normal", text: i.state }),
                      })
                    : null,
        eE = () => {
            if (!(0, R.A)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(V.A, { start: e, end: t });
        },
        eA = () =>
            null == ed
                ? (0, r.jsxs)("div", { children: [ep(), eh(), em()] })
                : (0, r.jsxs)(l.DUT, {
                      className: z.sd,
                      onClick: (e) => {
                          ea({ action: "PRESS_TEXT" }), ed(e);
                      },
                      children: [ep(), eh(), em()],
                  }),
        eI = () =>
            null == q || null == Z
                ? null
                : (0, r.jsx)(G.A, { user: t, guild: q, channel: Z, onAction: ea, onClose: X }),
        eT = () =>
            (0, r.jsx)(w.A, {
                containerClassName: z.o1,
                activity: i,
                user: t,
                onAction: ea,
                onClose: X,
                application: $,
            });
    return (0, r.jsx)(p.f5, {
        value: en,
        children: (0, r.jsxs)(M.A, {
            ref: es,
            className: a()(z.Nr, Q),
            onAction: ea,
            onClose: X,
            "aria-labelledby": el ? `${et} ${ee}` : ee,
            children: [
                (0, r.jsx)(k.A, {
                    textId: et,
                    tags: e_(),
                    ...eo,
                    contextMenu: (0, r.jsx)(F.A, {
                        display: "live",
                        user: t,
                        activity: i,
                        entry: ei,
                        onClose: X,
                        appContext: J,
                    }),
                }),
                (0, r.jsx)(y.A, {
                    applicationId: $?.id,
                    questContent: s.u.USER_PROFILE_ACTIVITY,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: z.rf,
                            ref: e,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: z.Qs,
                                    children: [
                                        !t.bot && ef(),
                                        (0, r.jsxs)("div", {
                                            className: z.zH,
                                            children: [
                                                eA(),
                                                !t.bot && (0, r.jsx)(x.A, { user: t, activity: i, className: z.jp }),
                                                eE(),
                                                er === W.d.MODAL_V2 && eT(),
                                            ],
                                        }),
                                        er === W.d.MODAL && eT(),
                                    ],
                                }),
                                eI(),
                            ],
                        }),
                }),
                er !== W.d.MODAL &&
                    er !== W.d.MODAL_V2 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            eT(),
                            (0, r.jsx)(L.A, {
                                className: z.AB,
                                userId: t.id,
                                activityApplication: $,
                                onClickViewMore: (e) => {
                                    e.stopPropagation(),
                                        ea({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        X?.(),
                                        (0, O.openUserProfileModal)({ userId: t.id, tabSection: j.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, r.jsx)(P.A, { applicationId: $?.id, onAction: ea, onClose: X, activity: i }),
            ],
        }),
    });
}
