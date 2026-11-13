r.d(e, { default: () => C });
var n = r(477900),
    l = r(582128),
    i = r(620632),
    a = r(906018),
    u = r(189213),
    s = r(289873),
    o = r(834730),
    c = r(652215),
    f = r(692768),
    d = r(948468),
    h = r(832521),
    p = r(873631),
    y = r(792996),
    g = r(520087);
function S(t) {
    if (t instanceof i.oh) {
        if (404 === t.status) return "unavailable";
        if (429 === t.status) return "rate_limited";
    }
    return "network";
}
function k(t, e) {
    switch (t) {
        case "unavailable":
            return y.intl.string(p.default.webc9u);
        case "rate_limited":
            return y.intl.string(p.default.OslXYm);
        case "network":
            return y.intl.string(e ? p.default.XQNwbP : p.default["0B5BDf"]);
    }
}
function m(t, e) {
    return { page: t, request: (0, f.oC)(t), errors: t.errors, responseCount: e };
}
function C(t) {
    let { surveyId: e, transitionState: r, onClose: f } = t,
        [C, b] = l.useState(null),
        [w, E] = l.useState(!0),
        [v, x] = l.useState(!1),
        [j, N] = l.useState(null),
        R = l.useRef(!0),
        P = l.useRef(null);
    l.useEffect(
        () => (
            (R.current = !0),
            () => {
                R.current = !1;
            }
        ),
        [],
    );
    let _ = l.useCallback(async () => {
        (E(!0), N(null));
        try {
            let t = await (async function (t) {
                let e = await i.Bo.post({ url: c.Rsh.SURVEY_SESSION(t), rejectWithError: !0 });
                return a.bI.fromJson(e.body, { ignoreUnknownFields: !0 });
            })(e);
            R.current && b(m(t, 0));
        } catch (t) {
            R.current && N(S(t));
        } finally {
            R.current && E(!1);
        }
    }, [e]);
    l.useEffect(() => {
        _();
    }, [_]);
    let q = C?.responseCount;
    l.useEffect(() => {
        P.current?.getScrollerNode()?.scrollTo({ top: 0 });
    }, [q]);
    let B = l.useCallback((t) => {
            P.current = null != t && "getScrollerNode" in t ? t : null;
        }, []),
        I = y.intl.string(p.default["2HrkOr"]),
        U = { variant: "secondary", text: y.intl.string(p.default["4LP8Gn"]), onClick: f };
    if (null == C) {
        let t = "network" === j;
        return (0, n.jsx)(u.a, {
            transitionState: r,
            onClose: f,
            size: "md",
            title: I,
            actions: t && !w ? [U, { variant: "primary", text: y.intl.string(p.default.TJmuBy), onClick: _ }] : [U],
            children: (0, n.jsx)("div", {
                className: g.h,
                "aria-live": "polite",
                children:
                    w || null == j
                        ? (0, n.jsx)(s.y, { "aria-label": y.intl.string(p.default["3XUf3j"]) })
                        : (0, n.jsx)(o.E, { variant: "body-md/normal", color: "text-default", children: k(j, !1) }),
            }),
        });
    }
    let { page: O, request: J, errors: L } = C,
        T = (function (t) {
            let { status: e } = t;
            return e === a.Ph.COMPLETE || e === a.Ph.ENDED;
        })(O);
    return (0, n.jsx)(u.a, {
        transitionState: r,
        onClose: f,
        size: "md",
        title: I,
        scrollerRef: B,
        notice: null != j ? { type: "critical", role: "alert", message: k(j, !0) } : void 0,
        actions: T
            ? [{ variant: "primary", text: y.intl.string(p.default["4LP8Gn"]), onClick: f }]
            : [
                  {
                      variant: "primary",
                      text: y.intl.string((0, h.w)(O) ? p.default.GyKIes : p.default["LH/X6e"]),
                      loading: v,
                      onClick: async function () {
                          if (null == C || v) return;
                          N(null);
                          let t = (0, d.o)(C.page, C.request);
                          if (t.length > 0) return void b({ ...C, errors: t });
                          x(!0);
                          try {
                              let t = await (async function (t, e) {
                                  let r = await i.Bo.post({
                                      url: c.Rsh.SURVEY_SESSION_SUBMIT(t),
                                      body: a.S3.toJson(e, { useProtoFieldName: !0 }),
                                      rejectWithError: !0,
                                  });
                                  return a.bI.fromJson(r.body, { ignoreUnknownFields: !0 });
                              })(e, C.request);
                              R.current && b(m(t, C.responseCount + 1));
                          } catch (t) {
                              R.current && N(S(t));
                          } finally {
                              R.current && x(!1);
                          }
                      },
                  },
              ],
        children: (0, n.jsx)(
            h.N,
            {
                page: O,
                request: J,
                onRequestChange: (t) => b((e) => (null != e ? { ...e, request: t } : e)),
                errors: L,
            },
            C.responseCount,
        ),
    });
}
