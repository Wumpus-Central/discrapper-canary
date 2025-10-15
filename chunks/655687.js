n.d(t, { Z: () => a });
var r = n(933557),
    i = n(981631),
    l = n(388032);
function a(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
        o = (0, r.ZP)(t, !0),
        c = (0, r.ZP)(t, !1);
    return null == t || null == o
        ? {
              placeholder: l.intl.string(l.t.MKDeyM),
              accessibilityLabel: l.intl.string(l.t.MKDeyM),
          }
        : a
          ? {
                placeholder: l.intl.string(l.t.YzpScX),
                accessibilityLabel: l.intl.string(l.t.YzpScX),
            }
          : n
            ? {
                  placeholder: l.intl.string(l.t.RRvRp6),
                  accessibilityLabel: l.intl.string(l.t.RRvRp6),
              }
            : t.isForumPost()
              ? {
                    placeholder: l.intl.formatToPlainString(l.t.Y6qWLS, { channel: o }),
                    accessibilityLabel: l.intl.formatToPlainString(l.t.KffKoa, { channel: c }),
                }
              : i.TPd.THREADS.has(t.type)
                ? {
                      placeholder: l.intl.formatToPlainString(l.t["8lzR/f"], { channel: o }),
                      accessibilityLabel: l.intl.formatToPlainString(l.t.UZIMWV, { channel: c }),
                  }
                : t.type === i.d4z.DM
                  ? {
                        placeholder: l.intl.formatToPlainString(l.t["4c+CAw"], { channel: o }),
                        accessibilityLabel: l.intl.formatToPlainString(l.t.fqOxbW, { channel: c }),
                    }
                  : {
                        placeholder: l.intl.formatToPlainString(l.t["8lzR/f"], { channel: o }),
                        accessibilityLabel: l.intl.formatToPlainString(l.t.ih7ZSE, { channel: c }),
                    };
}
