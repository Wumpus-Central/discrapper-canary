n.d(t, { Z: () => a });
var r = n(933557),
    l = n(981631),
    i = n(388032);
function a(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
        o = (0, r.ZP)(t, !0),
        s = (0, r.ZP)(t, !1);
    return null == t || null == o
        ? {
              placeholder: i.NW.string(i.t.MKDeyM),
              accessibilityLabel: i.NW.string(i.t.MKDeyM)
          }
        : a
          ? {
                placeholder: i.NW.string(i.t.YzpScX),
                accessibilityLabel: i.NW.string(i.t.YzpScX)
            }
          : n
            ? {
                  placeholder: i.NW.string(i.t.RRvRp6),
                  accessibilityLabel: i.NW.string(i.t.RRvRp6)
              }
            : t.isForumPost()
              ? {
                    placeholder: i.NW.formatToPlainString(i.t.Y6qWLS, { channel: o }),
                    accessibilityLabel: i.NW.formatToPlainString(i.t.KffKoa, { channel: s })
                }
              : l.TPd.THREADS.has(t.type)
                ? {
                      placeholder: i.NW.formatToPlainString(i.t['8lzR/f'], { channel: o }),
                      accessibilityLabel: i.NW.formatToPlainString(i.t.UZIMWV, { channel: s })
                  }
                : t.type === l.d4z.DM
                  ? {
                        placeholder: i.NW.formatToPlainString(i.t['4c+CAw'], { channel: o }),
                        accessibilityLabel: i.NW.formatToPlainString(i.t.fqOxbW, { channel: s })
                    }
                  : {
                        placeholder: i.NW.formatToPlainString(i.t['8lzR/f'], { channel: o }),
                        accessibilityLabel: i.NW.formatToPlainString(i.t.ih7ZSE, { channel: s })
                    };
}
