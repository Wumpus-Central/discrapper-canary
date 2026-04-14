"use strict";
n.d(t, { A: () => K });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(696292),
    o = n(397927),
    l = n(541806),
    u = n(765379),
    c = n(672979),
    d = n(960076),
    _ = n(793574),
    f = n(688810),
    p = n(47167),
    h = n(939341),
    m = n(662010),
    E = n(623671),
    g = n(365185),
    A = n(915089),
    I = n(932413),
    T = n(345942),
    S = n(82149),
    y = n(92240),
    v = n(257367),
    N = n(317572),
    C = n(53257),
    R = n(657331),
    O = n(939496),
    b = n(964195),
    D = n(167272),
    L = n(282197),
    w = n(624951),
    M = n(584904),
    x = n(351638),
    P = n(531648),
    k = n(910607),
    U = n(753713),
    G = n(8738),
    F = n(707794),
    V = n(518477),
    B = n(652215),
    H = n(360469),
    j = n(996988),
    Y = n(985018),
    W = n(844630);
function K(e) {
    let {
            user: t,
            currentUser: n,
            activity: i,
            application: K,
            voiceGuild: $,
            voiceChannel: z,
            className: q,
            onClose: Z,
            appContext: X,
        } = e,
        Q = (0, A.GV)(),
        J = (0, A.GV)(),
        { analyticsLocations: ee } = (0, f.Ay)(_.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: et } = (0, O.E)(),
        en = (0, g.A)({ activity: i, user: t }),
        er = (0, y.A)({ display: "live", user: t, activity: i, entry: en, analyticsLocations: ee }),
        ei = (0, v.A)({ userId: t.id, onAction: er }),
        es = (0, p.Ay)(z),
        ea = (0, N.A)(i),
        eo = null != ea.text && "" !== ea.text,
        { largeImage: el, smallImage: eu } = (0, h.XN)(i, K),
        ec = (0, F.A)({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: i,
            application: K,
            entry: en,
            onClose: Z,
        }),
        ed = () => {
            let e = (0, l.A)(i) ? "crunchyroll" : "default",
                t = et === j.d.MODAL_V2 ? E.w.SIZE_100 : E.w.SIZE_60;
            return null == ec
                ? (0, r.jsx)(E.d, { image: el, smallImage: eu, size: t, aspectRatio: e, className: W.Sl })
                : (0, r.jsx)(E.d, {
                      image: el,
                      smallImage: eu,
                      size: t,
                      className: W.mM,
                      aspectRatio: e,
                      onClick: (e) => {
                          er({ action: "PRESS_IMAGE" }), ec(e);
                      },
                  });
        },
        e_ = () =>
            (0, d.A)(i) && null != z
                ? (0, r.jsxs)("div", {
                      className: W.FH,
                      children: [
                          (0, r.jsx)(o.HKD, { size: "xxs", color: o.LU0.colors.TEXT_DEFAULT, className: W.Ow }),
                          (0, r.jsx)(P.Q, { variant: "heading-sm/semibold", text: es, id: Q }),
                      ],
                  })
                : (0, c.A)(i) || (0, S.Cy)(i)
                  ? (0, r.jsx)(P.Q, { variant: "heading-sm/semibold", text: i.name, id: Q })
                  : null != i.details
                    ? (0, r.jsx)(m.O, {
                          href: i.details_url,
                          children: (0, r.jsx)(P.Q, { variant: "heading-sm/semibold", text: i.details, id: Q }),
                      })
                    : (0, r.jsx)(P.Q, { variant: "heading-sm/semibold", text: i.name, id: Q }),
        ef = () =>
            i.type === B.$pd.HANG_STATUS
                ? null
                : (0, d.A)(i) && null != $
                  ? (0, r.jsx)(P.A, {
                        variant: "text-xs/normal",
                        text: Y.intl.formatToPlainString(Y.t["hq/Qze"], { guildName: $.name }),
                        onClick: () => {
                            (0, T.u)($.id), er({ action: "OPEN_VOICE_GUILD" }), Z?.();
                        },
                    })
                  : (0, c.A)(i)
                    ? (0, r.jsx)(m.O, {
                          href: i.details_url,
                          children: (0, r.jsx)(P.A, { variant: "text-xs/normal", text: i.details }),
                      })
                    : (0, S.Cy)(i)
                      ? (0, r.jsx)(P.A, { variant: "text-xs/normal", text: i?.assets?.small_text })
                      : (0, r.jsx)(m.O, {
                            href: i.state_url,
                            children: (0, r.jsx)(P.A, { variant: "text-xs/normal", text: i.state }),
                        }),
        ep = () => {
            if (i.type === B.$pd.WATCHING) return null;
            if ((0, c.A)(i)) return eh();
            if ((0, S.Cy)(i) && i.party?.size != null && i.party?.size.length >= 2) {
                let e = Y.intl.formatToPlainString(Y.t["JC/3xw"], {
                    numSpeakers: i.party?.size[0],
                    numListeners: i.party?.size[1] - i.party?.size[0],
                });
                return (0, r.jsx)(P.A, { variant: "text-xs/normal", text: e });
            }
            return i.assets?.large_text != null
                ? (0, r.jsx)(m.O, {
                      href: i.assets?.large_url,
                      children: (0, r.jsx)(P.A, { text: i.assets?.large_text, variant: "text-xs/normal" }),
                  })
                : null;
        },
        eh = () =>
            i.party?.size == null && i.application_id === H.I4
                ? (0, r.jsxs)("div", {
                      className: W.CI,
                      children: [
                          (0, r.jsx)(m.O, {
                              href: i.state_url,
                              children: (0, r.jsx)(P.A, { variant: "text-xs/normal", text: i.state }),
                          }),
                          (0, r.jsx)(P.A, {
                              variant: "text-xs/normal",
                              text: Y.intl.formatToPlainString(Y.t["u//9By"], {
                                  count: "0",
                                  max: K?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, u.A)(i) && i.party?.size != null && i.party?.size.length >= 2
                  ? (0, r.jsxs)("div", {
                        className: W.CI,
                        children: [
                            (0, r.jsx)(m.O, {
                                href: i.state_url,
                                children: (0, r.jsx)(P.A, { variant: "text-xs/normal", text: i.state }),
                            }),
                            (0, r.jsx)(P.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? Y.intl.formatToPlainString(Y.t.IM4J4e, { count: i.party.size[0] })
                                        : Y.intl.formatToPlainString(Y.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, r.jsx)(m.O, {
                          href: i.state_url,
                          children: (0, r.jsx)(P.A, { variant: "text-xs/normal", text: i.state }),
                      })
                    : null,
        em = () => {
            if (!(0, C.A)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(U.A, { start: e, end: t });
        },
        eE = () =>
            null == ec
                ? (0, r.jsxs)("div", { children: [e_(), ef(), ep()] })
                : (0, r.jsxs)(o.DUT, {
                      className: W.sd,
                      onClick: (e) => {
                          er({ action: "PRESS_TEXT" }), ec(e);
                      },
                      children: [e_(), ef(), ep()],
                  }),
        eg = () =>
            null == $ || null == z
                ? null
                : (0, r.jsx)(k.A, { user: t, guild: $, channel: z, onAction: er, onClose: Z }),
        eA = () =>
            (0, r.jsx)(D.A, {
                containerClassName: W.o1,
                activity: i,
                user: t,
                onAction: er,
                onClose: Z,
                application: K,
            });
    return (0, r.jsx)(f.f5, {
        value: ee,
        children: (0, r.jsxs)(M.A, {
            ref: ei,
            className: s()(W.Nr, q),
            onAction: er,
            onClose: Z,
            "aria-labelledby": eo ? `${J} ${Q}` : Q,
            children: [
                (0, r.jsx)(x.A, {
                    textId: J,
                    ...ea,
                    contextMenu: (0, r.jsx)(G.A, {
                        display: "live",
                        user: t,
                        activity: i,
                        entry: en,
                        onClose: Z,
                        appContext: X,
                    }),
                }),
                (0, r.jsx)(I.A, {
                    applicationId: K?.id,
                    questContent: a.u.USER_PROFILE_ACTIVITY,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: W.rf,
                            ref: e,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: W.Qs,
                                    children: [
                                        !t.bot && ed(),
                                        (0, r.jsxs)("div", {
                                            className: W.zH,
                                            children: [
                                                eE(),
                                                !t.bot && (0, r.jsx)(L.A, { user: t, activity: i, className: W.jp }),
                                                em(),
                                                et === j.d.MODAL_V2 && eA(),
                                            ],
                                        }),
                                        et === j.d.MODAL && eA(),
                                    ],
                                }),
                                eg(),
                            ],
                        }),
                }),
                et !== j.d.MODAL &&
                    et !== j.d.MODAL_V2 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            eA(),
                            (0, r.jsx)(b.A, {
                                className: W.AB,
                                userId: t.id,
                                activityApplication: K,
                                onClickViewMore: (e) => {
                                    e.stopPropagation(),
                                        er({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        Z?.(),
                                        (0, R.openUserProfileModal)({ userId: t.id, tabSection: V.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, r.jsx)(w.A, { applicationId: K?.id, onAction: er, onClose: Z, activity: i }),
            ],
        }),
    });
}
