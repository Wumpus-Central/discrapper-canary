n.d(t, { Z: () => a });
var r = n(933557),
    i = n(981631),
    o = n(388032);
function a(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
        s = (0, r.ZP)(t, !0),
        l = (0, r.ZP)(t, !1);
    return null == t || null == s
        ? {
              placeholder: o.intl.string(o.t.MKDeyM),
              accessibilityLabel: o.intl.string(o.t.MKDeyM),
          }
        : a
          ? {
                placeholder: o.intl.string(o.t.YzpScX),
                accessibilityLabel: o.intl.string(o.t.YzpScX),
            }
          : n
            ? {
                  placeholder: o.intl.string(o.t.RRvRp6),
                  accessibilityLabel: o.intl.string(o.t.RRvRp6),
              }
            : t.isForumPost()
              ? {
                    placeholder: o.intl.formatToPlainString(o.t.Y6qWLS, { channel: s }),
                    accessibilityLabel: o.intl.formatToPlainString(o.t.KffKoa, { channel: l }),
                }
              : i.TPd.THREADS.has(t.type)
                ? {
                      placeholder: o.intl.formatToPlainString(o.t["8lzR/f"], { channel: s }),
                      accessibilityLabel: o.intl.formatToPlainString(o.t.UZIMWV, { channel: l }),
                  }
                : t.type === i.d4z.DM
                  ? {
                        placeholder: o.intl.formatToPlainString(o.t["4c+CAw"], { channel: s }),
                        accessibilityLabel: o.intl.formatToPlainString(o.t.fqOxbW, { channel: l }),
                    }
                  : {
                        placeholder: o.intl.formatToPlainString(o.t["8lzR/f"], { channel: s }),
                        accessibilityLabel: o.intl.formatToPlainString(o.t.ih7ZSE, { channel: l }),
                    };
}
