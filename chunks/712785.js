"use strict";
n.d(t, { A: () => q });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(696292),
    o = n(990078),
    l = n(397927),
    u = n(541806),
    c = n(765379),
    d = n(672979),
    _ = n(960076),
    f = n(793574),
    p = n(688810),
    h = n(47167),
    m = n(939341),
    E = n(662010),
    g = n(623671),
    A = n(365185),
    I = n(915089),
    T = n(886019),
    S = n(559405),
    y = n(932413),
    v = n(345942),
    N = n(82149),
    C = n(92240),
    R = n(257367),
    O = n(317572),
    b = n(53257),
    D = n(657331),
    L = n(939496),
    w = n(964195),
    M = n(167272),
    x = n(282197),
    P = n(624951),
    k = n(584904),
    U = n(351638),
    G = n(531648),
    F = n(910607),
    V = n(753713),
    B = n(8738),
    H = n(707794),
    j = n(518477),
    Y = n(652215),
    W = n(360469),
    K = n(996988),
    $ = n(985018),
    z = n(963679);
function q(e) {
    let {
            user: t,
            currentUser: n,
            activity: i,
            application: q,
            voiceGuild: Z,
            voiceChannel: X,
            className: Q,
            onClose: J,
            appContext: ee,
        } = e,
        et = (0, I.GV)(),
        en = (0, I.GV)(),
        { analyticsLocations: er } = (0, p.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: ei } = (0, L.E)(),
        es = (0, A.A)({ activity: i, user: t }),
        ea = (0, C.A)({ display: "live", user: t, activity: i, entry: es, analyticsLocations: er }),
        eo = (0, R.A)({ userId: t.id, onAction: ea }),
        el = (0, h.Ay)(X),
        eu = (0, O.A)(i),
        ec = null != eu.text && "" !== eu.text,
        { largeImage: ed, smallImage: e_ } = (0, m.XN)(i, q),
        ef = (0, H.A)({
            location: "UserProfileActivityCard",
            user: t,
            currentUser: n,
            activity: i,
            application: q,
            entry: es,
            onClose: J,
        }),
        ep = () =>
            i.type !== Y.$pd.HANG_STATUS || t.id !== n.id || null == X
                ? null
                : (0, r.jsx)(o.m, { text: $.intl.string($.t.QSOBaq), children: (0, r.jsx)(l.mir, { size: "xxs" }) }),
        eh = () => {
            let e = (0, u.A)(i) ? "crunchyroll" : "default",
                n = ei === K.d.MODAL_V2 ? g.w.SIZE_100 : g.w.SIZE_60;
            return i.type === Y.$pd.HANG_STATUS
                ? (0, r.jsx)(S.A, {
                      userId: t.id,
                      size: ei !== K.d.MODAL_V2 ? 60 : 100,
                      hangStatusActivity: i,
                      className: s()(z.W9, z.Sl, { [z.EX]: ei !== K.d.MODAL_V2 }),
                  })
                : null == ef
                  ? (0, r.jsx)(g.d, { image: ed, smallImage: e_, size: n, aspectRatio: e, className: z.Sl })
                  : (0, r.jsx)(g.d, {
                        image: ed,
                        smallImage: e_,
                        size: n,
                        className: z.mM,
                        aspectRatio: e,
                        onClick: (e) => {
                            ea({ action: "PRESS_IMAGE" }), ef(e);
                        },
                    });
        },
        em = () =>
            i.type === Y.$pd.HANG_STATUS
                ? (0, r.jsx)(G.Q, { variant: "heading-sm/semibold", text: (0, T.Au)(t.id, i), id: et })
                : (0, _.A)(i) && null != X
                  ? (0, r.jsxs)("div", {
                        className: z.FH,
                        children: [
                            (0, r.jsx)(l.HKD, { size: "xxs", color: l.LU0.colors.TEXT_DEFAULT, className: z.Ow }),
                            (0, r.jsx)(G.Q, { variant: "heading-sm/semibold", text: el, id: et }),
                        ],
                    })
                  : (0, d.A)(i) || (0, N.Cy)(i)
                    ? (0, r.jsx)(G.Q, { variant: "heading-sm/semibold", text: i.name, id: et })
                    : null != i.details
                      ? (0, r.jsx)(E.O, {
                            href: i.details_url,
                            children: (0, r.jsx)(G.Q, { variant: "heading-sm/semibold", text: i.details, id: et }),
                        })
                      : (0, r.jsx)(G.Q, { variant: "heading-sm/semibold", text: i.name, id: et }),
        eE = () =>
            i.type === Y.$pd.HANG_STATUS
                ? null
                : (0, _.A)(i) && null != Z
                  ? (0, r.jsx)(G.A, {
                        variant: "text-xs/normal",
                        text: $.intl.formatToPlainString($.t["hq/Qze"], { guildName: Z.name }),
                        onClick: () => {
                            (0, v.u)(Z.id), ea({ action: "OPEN_VOICE_GUILD" }), J?.();
                        },
                    })
                  : (0, d.A)(i)
                    ? (0, r.jsx)(E.O, {
                          href: i.details_url,
                          children: (0, r.jsx)(G.A, { variant: "text-xs/normal", text: i.details }),
                      })
                    : (0, N.Cy)(i)
                      ? (0, r.jsx)(G.A, { variant: "text-xs/normal", text: i?.assets?.small_text })
                      : (0, r.jsx)(E.O, {
                            href: i.state_url,
                            children: (0, r.jsx)(G.A, { variant: "text-xs/normal", text: i.state }),
                        }),
        eg = () => {
            if (i.type === Y.$pd.WATCHING) return null;
            if ((0, d.A)(i)) return eA();
            if ((0, N.Cy)(i) && i.party?.size != null && i.party?.size.length >= 2) {
                let e = $.intl.formatToPlainString($.t["JC/3xw"], {
                    numSpeakers: i.party?.size[0],
                    numListeners: i.party?.size[1] - i.party?.size[0],
                });
                return (0, r.jsx)(G.A, { variant: "text-xs/normal", text: e });
            }
            return i.assets?.large_text != null
                ? (0, r.jsx)(E.O, {
                      href: i.assets?.large_url,
                      children: (0, r.jsx)(G.A, { text: i.assets?.large_text, variant: "text-xs/normal" }),
                  })
                : null;
        },
        eA = () =>
            i.party?.size == null && i.application_id === W.I4
                ? (0, r.jsxs)("div", {
                      className: z.CI,
                      children: [
                          (0, r.jsx)(E.O, {
                              href: i.state_url,
                              children: (0, r.jsx)(G.A, { variant: "text-xs/normal", text: i.state }),
                          }),
                          (0, r.jsx)(G.A, {
                              variant: "text-xs/normal",
                              text: $.intl.formatToPlainString($.t["u//9By"], {
                                  count: "0",
                                  max: q?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, c.A)(i) && i.party?.size != null && i.party?.size.length >= 2
                  ? (0, r.jsxs)("div", {
                        className: z.CI,
                        children: [
                            (0, r.jsx)(E.O, {
                                href: i.state_url,
                                children: (0, r.jsx)(G.A, { variant: "text-xs/normal", text: i.state }),
                            }),
                            (0, r.jsx)(G.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === i.party.size[1]
                                        ? $.intl.formatToPlainString($.t.IM4J4e, { count: i.party.size[0] })
                                        : $.intl.formatToPlainString($.t["u//9By"], {
                                              count: i.party.size[0],
                                              max: i.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == i.party
                    ? (0, r.jsx)(E.O, {
                          href: i.state_url,
                          children: (0, r.jsx)(G.A, { variant: "text-xs/normal", text: i.state }),
                      })
                    : null,
        eI = () => {
            if (!(0, b.A)(i)) return null;
            let { start: e, end: t } = i.timestamps;
            return (0, r.jsx)(V.A, { start: e, end: t });
        },
        eT = () =>
            null == ef
                ? (0, r.jsxs)("div", { children: [em(), eE(), eg()] })
                : (0, r.jsxs)(l.DUT, {
                      className: z.sd,
                      onClick: (e) => {
                          ea({ action: "PRESS_TEXT" }), ef(e);
                      },
                      children: [em(), eE(), eg()],
                  }),
        eS = () =>
            null == Z || null == X
                ? null
                : (0, r.jsx)(F.A, { user: t, guild: Z, channel: X, onAction: ea, onClose: J }),
        ey = () =>
            (0, r.jsx)(M.A, {
                containerClassName: z.o1,
                activity: i,
                user: t,
                onAction: ea,
                onClose: J,
                application: q,
            });
    return (0, r.jsx)(p.f5, {
        value: er,
        children: (0, r.jsxs)(k.A, {
            ref: eo,
            className: s()(z.Nr, Q),
            onAction: ea,
            onClose: J,
            "aria-labelledby": ec ? `${en} ${et}` : et,
            children: [
                (0, r.jsx)(U.A, {
                    textId: en,
                    tags: ep(),
                    ...eu,
                    contextMenu: (0, r.jsx)(B.A, {
                        display: "live",
                        user: t,
                        activity: i,
                        entry: es,
                        onClose: J,
                        appContext: ee,
                    }),
                }),
                (0, r.jsx)(y.A, {
                    applicationId: q?.id,
                    questContent: a.u.USER_PROFILE_ACTIVITY,
                    children: (e) =>
                        (0, r.jsxs)("div", {
                            className: z.rf,
                            ref: e,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: z.Qs,
                                    children: [
                                        !t.bot && eh(),
                                        (0, r.jsxs)("div", {
                                            className: z.zH,
                                            children: [
                                                eT(),
                                                !t.bot && (0, r.jsx)(x.A, { user: t, activity: i, className: z.jp }),
                                                eI(),
                                                ei === K.d.MODAL_V2 && ey(),
                                            ],
                                        }),
                                        ei === K.d.MODAL && ey(),
                                    ],
                                }),
                                eS(),
                            ],
                        }),
                }),
                ei !== K.d.MODAL &&
                    ei !== K.d.MODAL_V2 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            ey(),
                            (0, r.jsx)(w.A, {
                                className: z.AB,
                                userId: t.id,
                                activityApplication: q,
                                onClickViewMore: (e) => {
                                    e.stopPropagation(),
                                        ea({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        J?.(),
                                        (0, D.openUserProfileModal)({ userId: t.id, tabSection: j.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, r.jsx)(P.A, { applicationId: q?.id, onAction: ea, onClose: J, activity: i }),
            ],
        }),
    });
}
