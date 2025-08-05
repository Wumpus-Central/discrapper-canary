n.d(t, { Z: () => o });
var r = n(933557),
    i = n(981631),
    a = n(388032);
function o(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: o = !1 } = e,
        s = (0, r.ZP)(t, !0),
        l = (0, r.ZP)(t, !1);
    return null == t || null == s
        ? {
              placeholder: a.intl.string(a.t.MKDeyM),
              accessibilityLabel: a.intl.string(a.t.MKDeyM)
          }
        : o
          ? {
                placeholder: a.intl.string(a.t.YzpScX),
                accessibilityLabel: a.intl.string(a.t.YzpScX)
            }
          : n
            ? {
                  placeholder: a.intl.string(a.t.RRvRp6),
                  accessibilityLabel: a.intl.string(a.t.RRvRp6)
              }
            : t.isForumPost()
              ? {
                    placeholder: a.intl.formatToPlainString(a.t.Y6qWLS, { channel: s }),
                    accessibilityLabel: a.intl.formatToPlainString(a.t.KffKoa, { channel: l })
                }
              : i.TPd.THREADS.has(t.type)
                ? {
                      placeholder: a.intl.formatToPlainString(a.t['8lzR/f'], { channel: s }),
                      accessibilityLabel: a.intl.formatToPlainString(a.t.UZIMWV, { channel: l })
                  }
                : t.type === i.d4z.DM
                  ? {
                        placeholder: a.intl.formatToPlainString(a.t['4c+CAw'], { channel: s }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.fqOxbW, { channel: l })
                    }
                  : {
                        placeholder: a.intl.formatToPlainString(a.t['8lzR/f'], { channel: s }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.ih7ZSE, { channel: l })
                    };
}
