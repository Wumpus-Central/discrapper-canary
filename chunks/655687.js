n.d(t, { Z: () => a });
var r = n(933557),
    l = n(981631),
    i = n(388032);
function a(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
        u = (0, r.ZP)(t, !0),
        o = (0, r.ZP)(t, !1);
    return null == t || null == u
        ? {
              placeholder: i.intl.string(i.t.MKDeyM),
              accessibilityLabel: i.intl.string(i.t.MKDeyM)
          }
        : a
          ? {
                placeholder: i.intl.string(i.t.YzpScX),
                accessibilityLabel: i.intl.string(i.t.YzpScX)
            }
          : n
            ? {
                  placeholder: i.intl.string(i.t.RRvRp6),
                  accessibilityLabel: i.intl.string(i.t.RRvRp6)
              }
            : t.isForumPost()
              ? {
                    placeholder: i.intl.formatToPlainString(i.t.Y6qWLS, { channel: u }),
                    accessibilityLabel: i.intl.formatToPlainString(i.t.KffKoa, { channel: o })
                }
              : l.TPd.THREADS.has(t.type)
                ? {
                      placeholder: i.intl.formatToPlainString(i.t['8lzR/f'], { channel: u }),
                      accessibilityLabel: i.intl.formatToPlainString(i.t.UZIMWV, { channel: o })
                  }
                : t.type === l.d4z.DM
                  ? {
                        placeholder: i.intl.formatToPlainString(i.t['4c+CAw'], { channel: u }),
                        accessibilityLabel: i.intl.formatToPlainString(i.t.fqOxbW, { channel: o })
                    }
                  : {
                        placeholder: i.intl.formatToPlainString(i.t['8lzR/f'], { channel: u }),
                        accessibilityLabel: i.intl.formatToPlainString(i.t.ih7ZSE, { channel: o })
                    };
}
