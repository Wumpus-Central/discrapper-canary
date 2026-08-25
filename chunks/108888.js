n.d(e, { default: () => L });
var i,
    r = n(477900),
    s = n(582128),
    l = n(284009),
    a = n.n(l),
    o = n(536637),
    u = n.n(o),
    c = n(562708),
    E = n(189213),
    _ = n(772707),
    d = n(17928),
    f = n(66834),
    A = n(155718),
    g = n(31720),
    I = n(847599),
    m = n(931374),
    R = n(734057),
    p = n(71393),
    T = n(309010),
    C = n(287809),
    w = n(174459),
    b = n(975571),
    y = n(955437),
    S = n(612200),
    h = n(323073),
    G = n(201505),
    N = n(375708),
    k =
        (((i = {}).VERIFIED_ADULT = "verified_adult"),
        (i.VERIFIED_TEEN = "verified_teen"),
        (i.UNVERIFIED = "unverified"),
        i);
function V(t) {
    let { transitionState: e, reason: n, onClose: i, onConfirm: s } = t,
        l = N.intl.string(N.t.xi46lg),
        a = (function (t) {
            switch (t) {
                case "verified_adult":
                    return N.intl.string(N.t.fp3xf5);
                case "verified_teen":
                    return N.intl.string(N.t.dqC1w2);
                case "unverified":
                    return N.intl.string(N.t.qiLic6);
            }
        })(n),
        o = (function (t, e, n) {
            let i = { text: N.intl.string(N.t["/g10LC"]), onClick: e },
                r = { text: N.intl.string(N.t.FDSSia), onClick: n };
            switch (t) {
                case "verified_adult":
                    return [
                        { ...i, variant: "secondary" },
                        { text: N.intl.string(N.t.wVq7uo), onClick: n },
                    ];
                case "verified_teen":
                    return [{ ...r, variant: "secondary" }, i];
                case "unverified":
                    return [{ ...i, variant: "secondary" }, r];
            }
        })(n, i, s);
    return (0, r.jsx)(E.Modal, {
        transitionState: e,
        onClose: i,
        title: l,
        subtitle: a,
        actions: o,
        trackingProps: {
            impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
            impressionType: c.ImpressionTypes.MODAL,
        },
    });
}
var v = n(204925),
    F = n(652215),
    D = n(700129);
function L(t) {
    let e,
        n,
        { transitionState: i, source: l, onConfirm: o, guild: L } = t,
        M = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        x = (0, d.bG)([T.Ay, R.A], () => R.A.getChannel(T.Ay.getChannelId())),
        P = (0, d.bG)([p.A], () => p.A.getGuild(x?.getGuildId())),
        U = L ?? P,
        [O, j] = s.useState(null),
        [W, Y] = s.useState(null),
        [B, q] = s.useState(!1),
        [z, K] = s.useState(0),
        H = s.useRef(null),
        Q = s.useRef(null),
        Z = l === v.w_.DEEP_LINK_PROMPT,
        J = l === v.w_.FAMILY_CENTER,
        X = h.Bc.has(l),
        $ = (0, m.uE)(),
        tt = M?.ageVerificationStatus,
        te = (0, h.a9)() && !J && !Z,
        tn = $ ? k.VERIFIED_ADULT : tt === A.Tk.VERIFIED_TEEN || M?.nsfwAllowed === !1 ? k.VERIFIED_TEEN : k.UNVERIFIED,
        { verifyAgreementButtonText: ti, verifyGateDescription: tr, verifyTitle: ts } = (0, h.Gn)(l),
        tl = (0, h.vL)(x);
    (0, m.I7)(l);
    let ta = null != O ? u()().diff(O, "years") : null;
    function to() {
        if (l === v.w_.NSFW_SERVER_INVITE_EMBED || l === v.w_.NSFW_SERVER_INVITE)
            return (0, S.IO)(l), Promise.resolve();
        let t = x?.getGuildId();
        return f.A.nsfwReturnToSafety(t), (0, S.IO)(l), Promise.resolve();
    }
    async function tu() {
        a()(null != O, "Cannot submit null birthday.");
        try {
            return Y(null), q(!0), await (0, y.n7)(O, l), !0;
        } catch (t) {
            return (
                null != t.body && null != t.body.date_of_birth
                    ? (0, S.MP)(l, t.body.date_of_birth)
                    : (t?.body?.username != null ? Y(N.intl.string(N.t["TGg/2k"])) : Y(t?.body.message), q(!1)),
                !1
            );
        }
    }
    async function tc() {
        (a()(null != ta, "Cannot submit if we haven't been able to calculate age."), ta < 18) ? K(1) : await tu();
    }
    async function tE(t) {
        t.preventDefault(), B || null == O || (await tc());
    }
    async function t_() {
        (await tu()) || K(0);
    }
    s.useEffect(() => {
        !X && (M?.nsfwAllowed !== !0 || te || Z || (0, S.Nk)(l));
    }),
        s.useEffect(() => {
            w.default.track(F.HAw.AGE_GATE_ACTION, { source: l, action: v.AM.AGE_GATE_OPEN });
        }, [l]);
    let td = s.useCallback(
            (t) => {
                j(t);
            },
            [j],
        ),
        tf = s.useCallback(() => {
            Q.current?.focus();
        }, [Q]),
        tA = s.useCallback(() => {
            g.A.showAgeVerificationGetStartedModal({ entryPoint: I.q1.NSFW_AGE_GATE });
        }, []),
        tg = s.useCallback(() => {
            null != o ? o() : null != U && f.A.nsfwAgree(U.id), (0, S.IO)(l);
        }, [l, U, o]),
        tI = { transitionState: i, onClose: to, graphic: { type: "image", src: D.A }, gradientColor: "blue" };
    return X
        ? (0, r.jsx)(V, { transitionState: i, reason: tn, onClose: to, onConfirm: tn === k.VERIFIED_ADULT ? tg : tA })
        : te
          ? (0, r.jsx)(_.k, {
                title: ts,
                subtitle: tr,
                actions: [
                    { text: N.intl.string(N.t.f3Pet9), onClick: to, variant: "secondary" },
                    { text: ti ?? N.intl.string(N.t.FDSSia), onClick: tA },
                ],
                trackingProps: {
                    impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
                    impressionType: c.ImpressionTypes.MODAL,
                },
                ...tI,
            })
          : M?.nsfwAllowed !== !1 || !tl || J || Z
            ? 0 === z
                ? ((e = (() => {
                      switch (l) {
                          case v.w_.NSFW_SERVER:
                          case v.w_.NSFW_SERVER_INVITE:
                          case v.w_.NSFW_SERVER_INVITE_EMBED:
                              return N.intl.string(N.t.vAymlG);
                          case v.w_.FAMILY_CENTER:
                              return N.intl.string(N.t.M7mt7m);
                          default:
                              return N.intl.string(N.t.F8otRo);
                      }
                  })()),
                  (n = (() => {
                      switch (l) {
                          case v.w_.FAMILY_CENTER:
                              return N.intl.string(N.t.mhUrKS);
                          case v.w_.DEEP_LINK_PROMPT:
                              return N.intl.format(N.t.iyhg2s, { helpURL: b.A.getArticleURL(F.MVz.AGE_GATE) });
                          default:
                              return N.intl.format(N.t.n3QjDE, { helpURL: b.A.getArticleURL(F.MVz.AGE_GATE) });
                      }
                  })()),
                  (0, r.jsx)("form", {
                      onSubmit: tE,
                      children: (0, r.jsx)(E.Modal, {
                          title: e,
                          subtitle: n,
                          actions: [
                              { text: N.intl.string(N.t["1MrpWO"]), onClick: to, variant: "secondary" },
                              { text: N.intl.string(N.t.uBFuok), onClick: tc, loading: B, disabled: null == O },
                          ],
                          ...tI,
                          children: (0, r.jsx)(G.A, {
                              label: N.intl.string(N.t.rhBeKe),
                              name: "date_of_birth",
                              onChange: td,
                              onPopulated: tf,
                              error: W,
                              value: O,
                              ref: H,
                              autoFocus: !0,
                          }),
                      }),
                  }))
                : (0, r.jsx)(E.Modal, {
                      transitionState: i,
                      onClose: to,
                      title: N.intl.formatToPlainString(N.t.wumolR, { age: ta ?? "" }),
                      subtitle: N.intl.formatToPlainString(N.t.n3QjDE, { helpURL: b.A.getArticleURL(F.MVz.AGE_GATE) }),
                      actions: [
                          { text: N.intl.string(N.t.cfYCrb), onClick: () => K(0), variant: "secondary" },
                          { text: N.intl.string(N.t["6tahin"]), onClick: t_ },
                      ],
                  })
            : (0, r.jsx)(_.k, {
                  title: N.intl.string(N.t.NEabBa),
                  subtitle: N.intl.format(N.t["2kHZes"], { helpURL: b.A.getArticleURL(F.MVz.AGE_GATE) }),
                  actions: [{ text: N.intl.string(N.t["/g10LC"]), onClick: to, variant: "secondary" }],
                  trackingProps: {
                      impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
                      impressionType: c.ImpressionTypes.MODAL,
                  },
                  ...tI,
              });
}
