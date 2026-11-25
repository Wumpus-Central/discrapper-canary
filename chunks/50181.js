var l = t(582128),
    a = t(260498),
    u = t(88112),
    r = t(722701),
    i = t(984782),
    s = t(892188),
    c = t(738604);
function p(e, n, t) {
    !(function (e, n) {
        let t = a.Ay.getProject(e);
        if (null == t || !0 === n.busy || (0, c.t8)(e) || r.A.isProjectPublishing(e)) return !1;
        let l = r.A.getPublishStatus(e);
        return null != (0, i.a1)(t, l) || (l?.safetyHold !== !0 && (0, u.oH)(l?.views));
    })(e, t)
        ? (async function (e, n, t) {
              try {
                  await (0, c.FZ)(e, n, t);
              } catch (n) {
                  console.error("[conjure] publish action failed", e, n);
              }
          })(e, n, t)
        : (0, s.Y)({ projectId: e, publishOptions: t, entryPoint: n });
}
t.d(
    n,
    {},
    {
        A: function (e, n, t) {
            let a = l.useContext(c.bI),
                u = t ?? a;
            return l.useCallback(
                (t) => {
                    null == e || null == n || null == u || n.disabled || p(e, t, u);
                },
                [e, n, u],
            );
        },
        K: p,
    },
);
