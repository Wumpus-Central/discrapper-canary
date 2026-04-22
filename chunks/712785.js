e.d(n, { A: () => $ });
var i = e(627968);
e(64700);
var l = e(503698),
    r = e.n(l),
    a = e(696292),
    s = e(983851),
    o = e(827734),
    c = e(939249),
    u = e(541806),
    d = e(765379),
    A = e(672979),
    x = e(960076),
    p = e(793574),
    f = e(688810),
    _ = e(47167),
    m = e(939341),
    E = e(662010),
    T = e(623671),
    g = e(365185),
    N = e(915089),
    C = e(932413),
    I = e(345942),
    O = e(82149),
    S = e(92240),
    y = e(257367),
    h = e(317572),
    j = e(53257),
    v = e(657331),
    P = e(939496),
    L = e(964195),
    R = e(167272),
    b = e(282197),
    D = e(624951),
    U = e(584904),
    M = e(351638),
    G = e(531648),
    V = e(910607),
    Y = e(753713),
    k = e(8738),
    W = e(707794),
    B = e(518477),
    w = e(652215),
    F = e(360469),
    H = e(996988),
    z = e(985018),
    X = e(514566);
function $(t) {
    let {
            user: n,
            currentUser: e,
            activity: l,
            application: $,
            voiceGuild: Q,
            voiceChannel: q,
            className: J,
            onClose: K,
            appContext: Z,
        } = t,
        tt = (0, N.GV)(),
        tn = (0, N.GV)(),
        { analyticsLocations: te } = (0, f.Ay)(p.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        { themeType: ti } = (0, P.E)(),
        tl = (0, g.A)({ activity: l, user: n }),
        tr = (0, S.A)({ display: "live", user: n, activity: l, entry: tl, analyticsLocations: te }),
        ta = (0, y.A)({ userId: n.id, onAction: tr }),
        ts = (0, _.Ay)(q),
        to = (0, h.A)(l),
        tc = null != to.text && "" !== to.text,
        { largeImage: tu, smallImage: td } = (0, m.XN)(l, $),
        tA = (0, W.A)({
            location: "UserProfileActivityCard",
            user: n,
            currentUser: e,
            activity: l,
            application: $,
            entry: tl,
            onClose: K,
        }),
        tx = () =>
            (0, x.A)(l) && null != q
                ? (0, i.jsxs)("div", {
                      className: X.FH,
                      children: [
                          (0, i.jsx)(s.H, { size: "xxs", color: o.A.colors.TEXT_DEFAULT, className: X.Ow }),
                          (0, i.jsx)(G.Q, { variant: "heading-sm/semibold", text: ts, id: tt }),
                      ],
                  })
                : (0, A.A)(l) || (0, O.Cy)(l)
                  ? (0, i.jsx)(G.Q, { variant: "heading-sm/semibold", text: l.name, id: tt })
                  : null != l.details
                    ? (0, i.jsx)(E.O, {
                          href: l.details_url,
                          children: (0, i.jsx)(G.Q, { variant: "heading-sm/semibold", text: l.details, id: tt }),
                      })
                    : (0, i.jsx)(G.Q, { variant: "heading-sm/semibold", text: l.name, id: tt }),
        tp = () =>
            l.type === w.$pd.HANG_STATUS
                ? null
                : (0, x.A)(l) && null != Q
                  ? (0, i.jsx)(G.A, {
                        variant: "text-xs/normal",
                        text: z.intl.formatToPlainString(z.t["hq/Qze"], { guildName: Q.name }),
                        onClick: () => {
                            (0, I.u)(Q.id), tr({ action: "OPEN_VOICE_GUILD" }), K?.();
                        },
                    })
                  : (0, A.A)(l)
                    ? (0, i.jsx)(E.O, {
                          href: l.details_url,
                          children: (0, i.jsx)(G.A, { variant: "text-xs/normal", text: l.details }),
                      })
                    : (0, O.Cy)(l)
                      ? (0, i.jsx)(G.A, { variant: "text-xs/normal", text: l?.assets?.small_text })
                      : (0, i.jsx)(E.O, {
                            href: l.state_url,
                            children: (0, i.jsx)(G.A, { variant: "text-xs/normal", text: l.state }),
                        }),
        tf = () => {
            if (l.type === w.$pd.WATCHING) return null;
            if ((0, A.A)(l)) return t_();
            if ((0, O.Cy)(l) && l.party?.size != null && l.party?.size.length >= 2) {
                let t = z.intl.formatToPlainString(z.t["JC/3xw"], {
                    numSpeakers: l.party?.size[0],
                    numListeners: l.party?.size[1] - l.party?.size[0],
                });
                return (0, i.jsx)(G.A, { variant: "text-xs/normal", text: t });
            }
            return l.assets?.large_text != null
                ? (0, i.jsx)(E.O, {
                      href: l.assets?.large_url,
                      children: (0, i.jsx)(G.A, { text: l.assets?.large_text, variant: "text-xs/normal" }),
                  })
                : null;
        },
        t_ = () =>
            l.party?.size == null && l.application_id === F.I4
                ? (0, i.jsxs)("div", {
                      className: X.CI,
                      children: [
                          (0, i.jsx)(E.O, {
                              href: l.state_url,
                              children: (0, i.jsx)(G.A, { variant: "text-xs/normal", text: l.state }),
                          }),
                          (0, i.jsx)(G.A, {
                              variant: "text-xs/normal",
                              text: z.intl.formatToPlainString(z.t["u//9By"], {
                                  count: "0",
                                  max: $?.getMaxParticipants() ?? 0,
                              }),
                          }),
                      ],
                  })
                : (0, d.A)(l) && l.party?.size != null && l.party?.size.length >= 2
                  ? (0, i.jsxs)("div", {
                        className: X.CI,
                        children: [
                            (0, i.jsx)(E.O, {
                                href: l.state_url,
                                children: (0, i.jsx)(G.A, { variant: "text-xs/normal", text: l.state }),
                            }),
                            (0, i.jsx)(G.A, {
                                variant: "text-xs/normal",
                                text:
                                    0 === l.party.size[1]
                                        ? z.intl.formatToPlainString(z.t.IM4J4e, { count: l.party.size[0] })
                                        : z.intl.formatToPlainString(z.t["u//9By"], {
                                              count: l.party.size[0],
                                              max: l.party.size[1],
                                          }),
                            }),
                        ],
                    })
                  : null == l.party
                    ? (0, i.jsx)(E.O, {
                          href: l.state_url,
                          children: (0, i.jsx)(G.A, { variant: "text-xs/normal", text: l.state }),
                      })
                    : null,
        tm = () =>
            (0, i.jsx)(R.A, {
                containerClassName: X.o1,
                activity: l,
                user: n,
                onAction: tr,
                onClose: K,
                application: $,
            });
    return (0, i.jsx)(f.f5, {
        value: te,
        children: (0, i.jsxs)(U.A, {
            ref: ta,
            className: r()(X.Nr, J),
            onAction: tr,
            onClose: K,
            "aria-labelledby": tc ? `${tn} ${tt}` : tt,
            children: [
                (0, i.jsx)(M.A, {
                    textId: tn,
                    ...to,
                    contextMenu: (0, i.jsx)(k.A, {
                        display: "live",
                        user: n,
                        activity: l,
                        entry: tl,
                        onClose: K,
                        appContext: Z,
                    }),
                }),
                (0, i.jsx)(C.A, {
                    applicationId: $?.id,
                    questContent: a.u.USER_PROFILE_ACTIVITY,
                    children: (t) => {
                        let e, r;
                        return (0, i.jsxs)("div", {
                            className: X.rf,
                            ref: t,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: X.Qs,
                                    children: [
                                        !n.bot &&
                                            ((e = (0, u.A)(l) ? "crunchyroll" : "default"),
                                            (r = ti === H.d.MODAL_V2 ? T.w.SIZE_100 : T.w.SIZE_60),
                                            null == tA
                                                ? (0, i.jsx)(T.d, {
                                                      image: tu,
                                                      smallImage: td,
                                                      size: r,
                                                      aspectRatio: e,
                                                      className: X.Sl,
                                                  })
                                                : (0, i.jsx)(T.d, {
                                                      image: tu,
                                                      smallImage: td,
                                                      size: r,
                                                      className: X.mM,
                                                      aspectRatio: e,
                                                      onClick: (t) => {
                                                          tr({ action: "PRESS_IMAGE" }), tA(t);
                                                      },
                                                  })),
                                        (0, i.jsxs)("div", {
                                            className: X.zH,
                                            children: [
                                                null == tA
                                                    ? (0, i.jsxs)("div", { children: [tx(), tp(), tf()] })
                                                    : (0, i.jsxs)(c.D, {
                                                          className: X.sd,
                                                          onClick: (t) => {
                                                              tr({ action: "PRESS_TEXT" }), tA(t);
                                                          },
                                                          children: [tx(), tp(), tf()],
                                                      }),
                                                !n.bot && (0, i.jsx)(b.A, { user: n, activity: l, className: X.jp }),
                                                (() => {
                                                    if (!(0, j.A)(l)) return null;
                                                    let { start: t, end: n } = l.timestamps;
                                                    return (0, i.jsx)(Y.A, { start: t, end: n });
                                                })(),
                                                ti === H.d.MODAL_V2 && tm(),
                                            ],
                                        }),
                                        ti === H.d.MODAL && tm(),
                                    ],
                                }),
                                null == Q || null == q
                                    ? null
                                    : (0, i.jsx)(V.A, { user: n, guild: Q, channel: q, onAction: tr, onClose: K }),
                            ],
                        });
                    },
                }),
                ti !== H.d.MODAL &&
                    ti !== H.d.MODAL_V2 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            tm(),
                            (0, i.jsx)(L.A, {
                                className: X.AB,
                                userId: n.id,
                                activityApplication: $,
                                onClickViewMore: (t) => {
                                    t.stopPropagation(),
                                        tr({ action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE" }),
                                        K?.(),
                                        (0, v.openUserProfileModal)({ userId: n.id, tabSection: B.RP.WIDGETS });
                                },
                            }),
                        ],
                    }),
                (0, i.jsx)(D.A, { applicationId: $?.id, onAction: tr, onClose: K, activity: l }),
            ],
        }),
    });
}
