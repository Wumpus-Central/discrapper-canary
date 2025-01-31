n.d(t, { Z: () => r });
var i = n(933557),
    l = n(981631),
    a = n(388032);
function r(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: r = !1 } = e,
        s = (0, i.ZP)(t, !0),
        o = (0, i.ZP)(t, !1);
    return null == t || null == s
        ? {
              placeholder: a.intl.string(a.t.MKDeyM),
              accessibilityLabel: a.intl.string(a.t.MKDeyM)
          }
        : r
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
                    accessibilityLabel: a.intl.formatToPlainString(a.t.KffKoa, { channel: o })
                }
              : l.TPd.THREADS.has(t.type)
                ? {
                      placeholder: a.intl.formatToPlainString(a.t['8lzR/f'], { channel: s }),
                      accessibilityLabel: a.intl.formatToPlainString(a.t.UZIMWV, { channel: o })
                  }
                : t.type === l.d4z.DM
                  ? {
                        placeholder: a.intl.formatToPlainString(a.t['4c+CAw'], { channel: s }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.fqOxbW, { channel: o })
                    }
                  : {
                        placeholder: a.intl.formatToPlainString(a.t['8lzR/f'], { channel: s }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.ih7ZSE, { channel: o })
                    };
}
