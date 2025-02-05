n.d(t, { Z: () => a });
var l = n(933557),
    i = n(981631),
    r = n(388032);
function a(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
        s = (0, l.ZP)(t, !0),
        o = (0, l.ZP)(t, !1);
    return null == t || null == s
        ? {
              placeholder: r.intl.string(r.t.MKDeyM),
              accessibilityLabel: r.intl.string(r.t.MKDeyM)
          }
        : a
          ? {
                placeholder: r.intl.string(r.t.YzpScX),
                accessibilityLabel: r.intl.string(r.t.YzpScX)
            }
          : n
            ? {
                  placeholder: r.intl.string(r.t.RRvRp6),
                  accessibilityLabel: r.intl.string(r.t.RRvRp6)
              }
            : t.isForumPost()
              ? {
                    placeholder: r.intl.formatToPlainString(r.t.Y6qWLS, { channel: s }),
                    accessibilityLabel: r.intl.formatToPlainString(r.t.KffKoa, { channel: o })
                }
              : i.TPd.THREADS.has(t.type)
                ? {
                      placeholder: r.intl.formatToPlainString(r.t['8lzR/f'], { channel: s }),
                      accessibilityLabel: r.intl.formatToPlainString(r.t.UZIMWV, { channel: o })
                  }
                : t.type === i.d4z.DM
                  ? {
                        placeholder: r.intl.formatToPlainString(r.t['4c+CAw'], { channel: s }),
                        accessibilityLabel: r.intl.formatToPlainString(r.t.fqOxbW, { channel: o })
                    }
                  : {
                        placeholder: r.intl.formatToPlainString(r.t['8lzR/f'], { channel: s }),
                        accessibilityLabel: r.intl.formatToPlainString(r.t.ih7ZSE, { channel: o })
                    };
}
