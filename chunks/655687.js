n.d(t, { Z: () => a });
var r = n(933557),
    i = n(981631),
    l = n(388032);
function a(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
        o = (0, r.ZP)(t, !0),
        s = (0, r.ZP)(t, !1);
    return null == t || null == o
        ? {
              placeholder: l.intl.string(l.t.MKDeyL),
              accessibilityLabel: l.intl.string(l.t.MKDeyL),
          }
        : a
          ? {
                placeholder: l.intl.string(l.t.YzpScd),
                accessibilityLabel: l.intl.string(l.t.YzpScd),
            }
          : n
            ? {
                  placeholder: l.intl.string(l.t["RRvRp/"]),
                  accessibilityLabel: l.intl.string(l.t["RRvRp/"]),
              }
            : t.isForumPost()
              ? {
                    placeholder: l.intl.formatToPlainString(l.t.Y6qWLc, { channel: o }),
                    accessibilityLabel: l.intl.formatToPlainString(l.t.KffKoR, { channel: s }),
                }
              : i.TPd.THREADS.has(t.type)
                ? {
                      placeholder: l.intl.formatToPlainString(l.t["8lzR/R"], { channel: o }),
                      accessibilityLabel: l.intl.formatToPlainString(l.t.UZIMWS, { channel: s }),
                  }
                : t.type === i.d4z.DM
                  ? {
                        placeholder: l.intl.formatToPlainString(l.t["4c+CAx"], { channel: o }),
                        accessibilityLabel: l.intl.formatToPlainString(l.t.fqOxbV, { channel: s }),
                    }
                  : {
                        placeholder: l.intl.formatToPlainString(l.t["8lzR/R"], { channel: o }),
                        accessibilityLabel: l.intl.formatToPlainString(l.t.ih7ZSA, { channel: s }),
                    };
}
