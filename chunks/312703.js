n.d(t, { n3: () => a });
var i = n(823379),
    r = n(44136),
    l = n(354459);
function a(e, t, n) {
    return null == t || t.type === l.fO.ACTIVITY
        ? []
        : [
              t.type === l.fO.STREAM
                  ? e.find(
                        (e) =>
                            e.type === l.fO.USER &&
                            e.id === (null == t ? void 0 : t.user.id) &&
                            e.id !== n &&
                            (0, r.ZP)(e),
                    )
                  : null,
              t.type === l.fO.USER
                  ? e.find(
                        (e) =>
                            e.type === l.fO.STREAM &&
                            e.user.id === (null == t ? void 0 : t.user.id) &&
                            null != e.streamId,
                    )
                  : null,
              t.id !== n ? e.find((e) => e.type === l.fO.USER && e.id === n && (0, r.ZP)(e)) : null,
          ].filter(i.lm);
}
