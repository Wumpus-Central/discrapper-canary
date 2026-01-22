n.d(t, {
    A: () => a,
});
var l = n(47167),
    r = n(652215),
    i = n(985018);

function a(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
        s = (0, l.Ay)(t, !0),
        o = (0, l.Ay)(t, !1);
    return null == t || null == s
        ? {
              placeholder: i.intl.string(i.t.MKDeyL),
              accessibilityLabel: i.intl.string(i.t.MKDeyL),
          }
        : a
          ? {
                placeholder: i.intl.string(i.t.YzpScd),
                accessibilityLabel: i.intl.string(i.t.YzpScd),
            }
          : n
            ? {
                  placeholder: i.intl.string(i.t["RRvRp/"]),
                  accessibilityLabel: i.intl.string(i.t["RRvRp/"]),
              }
            : t.isForumPost()
              ? {
                    placeholder: i.intl.formatToPlainString(i.t.Y6qWLc, {
                        channel: s,
                    }),
                    accessibilityLabel: i.intl.formatToPlainString(i.t.KffKoR, {
                        channel: o,
                    }),
                }
              : r.kvI.THREADS.has(t.type)
                ? {
                      placeholder: i.intl.formatToPlainString(i.t["8lzR/R"], {
                          channel: s,
                      }),
                      accessibilityLabel: i.intl.formatToPlainString(i.t.UZIMWS, {
                          channel: o,
                      }),
                  }
                : t.type === r.rbe.DM
                  ? {
                        placeholder: i.intl.formatToPlainString(i.t["4c+CAx"], {
                            channel: s,
                        }),
                        accessibilityLabel: i.intl.formatToPlainString(i.t.fqOxbV, {
                            channel: o,
                        }),
                    }
                  : {
                        placeholder: i.intl.formatToPlainString(i.t["8lzR/R"], {
                            channel: s,
                        }),
                        accessibilityLabel: i.intl.formatToPlainString(i.t.ih7ZSA, {
                            channel: o,
                        }),
                    };
}
