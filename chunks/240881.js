i.d(e, { default: () => g });
var a = i(477900),
    n = i(582128),
    r = i(503698),
    l = i.n(r),
    s = i(984827),
    o = i(408278),
    c = i(789645),
    u = i(821609),
    d = i(284009),
    p = i.n(d);
(s.x.PORTRAIT, s.x.PORTRAIT);
let x = { preferred: s.x.LANDSCAPE, supported: [s.x.LANDSCAPE, s.x.PORTRAIT] },
    A = { [s.x.PORTRAIT]: 9 / 16, [s.x.LANDSCAPE]: 16 / 9 };
function R(t, e) {
    let i = t[e];
    return null == i || "" === i ? null : { url: i, aspectRatio: e };
}
var v = i(738822),
    T = i(291749),
    I = i(637691),
    b = i(738883),
    f = i(669912),
    h = i(323889),
    m = i(192308),
    C = i(590202),
    N = i(971649),
    O = i(620954),
    P = i(617986),
    j = i(105292),
    L = i(815714),
    D = i(862649);
function _(t) {
    let { iconImageUri: e } = t;
    return null == e
        ? (0, a.jsx)("div", { "aria-hidden": !0, className: L.Z })
        : (0, a.jsx)("img", {
              src: (0, T.lR)({ assetUrl: e, width: 48, height: 48 }),
              alt: "",
              width: 48,
              height: 48,
              className: L.Z,
          });
}
function g(t) {
    let { transitionState: e, onClose: i, bounty: r, sourceQuestContent: d } = t,
        { orientation: T } = n.useMemo(() => {
            var t, e;
            let i =
                ((t = r),
                (e = x),
                null == t.videoRenditions
                    ? e.supported.includes(s.x.PORTRAIT)
                        ? { url: t.videoHls, aspectRatio: s.x.PORTRAIT }
                        : null
                    : (function (t, e) {
                          let { preferred: i, supported: a } = e;
                          p()(a.includes(i), "Preferred aspect ratio must be in supported renditions list");
                          let n = R(t, i);
                          if (null != n) return n;
                          let r = A[i],
                              l = null,
                              s = 1 / 0;
                          for (let e of a) {
                              if (e === i) continue;
                              let a = R(t, e);
                              if (null == a) continue;
                              let n = Math.abs(A[e] - r);
                              n < s && ((s = n), (l = a));
                          }
                          return l;
                      })(t.videoRenditions, e));
            return null == i
                ? { url: r.videoHls, orientation: "portrait" }
                : { url: i.url, orientation: i.aspectRatio === s.x.PORTRAIT ? "portrait" : "landscape" };
        }, [r]),
        L = "portrait" === T,
        g = { label: r.productName, buttonLabel: r.cta.buttonLabel, iconImageUri: r.productIcon },
        k = g.label ?? r.advertiserName,
        y = (function (t) {
            let { bounty: e, onClose: i, sourceQuestContent: a } = t,
                r = (0, N.QK)();
            return n.useCallback(
                async (t) => {
                    ((await (0, P.f7)(e.cta.url)) && (i(), (0, m.closeAllModals)()),
                        (0, O._Q)(
                            { adContentId: e.id, adCreativeType: h.p.BOUNTY, cta: e.cta },
                            { content: t, ctaContent: C.Cy.OPEN_GAME_LINK, impressionId: r(), sourceQuestContent: a },
                        ));
                },
                [e.id, e.cta, i, a, r],
            );
        })({ bounty: r, onClose: i, sourceQuestContent: d });
    return (0, a.jsx)(f.A, {
        transitionState: e,
        orientation: T,
        ariaLabel: k,
        video: (0, a.jsx)("div", {
            className: D.W6,
            children: (0, a.jsx)("div", {
                className: l()(D.NS, { [D.DO]: L, [D.r7]: !L }),
                children: (0, a.jsx)("div", {
                    className: D.R4,
                    children: (0, a.jsx)(o.K, {
                        variant: "overlay-secondary",
                        icon: c.P,
                        "aria-label": j.intl.string(j.t.cpT0Cq),
                        onClick: i,
                    }),
                }),
            }),
        }),
        footer: (0, a.jsx)(b.A, {
            prefix: (0, a.jsx)(_, { iconImageUri: g.iconImageUri }),
            advertiserDetails: (0, a.jsx)(I.A, {
                title: k,
                subtitle: j.intl.string(j.t.o6FLcF),
                onClick: () => y(v.uF.VIDEO_MODAL),
            }),
            primaryAction: (0, a.jsx)(u.$, {
                variant: "primary",
                text: g.buttonLabel,
                onClick: () => y(v.uF.VIDEO_MODAL_PRIMARY_CTA),
            }),
        }),
    });
}
