"use strict";
n.d(t, { A: () => a });
var r = n(47167),
    i = n(652215),
    s = n(985018);
function a(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
        o = (0, r.Ay)(t, !0),
        l = (0, r.Ay)(t, !1);
    return null == t || null == o
        ? { placeholder: s.intl.string(s.t.MKDeyL), accessibilityLabel: s.intl.string(s.t.MKDeyL) }
        : a
          ? { placeholder: s.intl.string(s.t.YzpScd), accessibilityLabel: s.intl.string(s.t.YzpScd) }
          : n
            ? { placeholder: s.intl.string(s.t["RRvRp/"]), accessibilityLabel: s.intl.string(s.t["RRvRp/"]) }
            : t.isForumPost()
              ? {
                    placeholder: s.intl.formatToPlainString(s.t.Y6qWLc, { channel: o }),
                    accessibilityLabel: s.intl.formatToPlainString(s.t.KffKoR, { channel: l }),
                }
              : i.kvI.THREADS.has(t.type)
                ? {
                      placeholder: s.intl.formatToPlainString(s.t["8lzR/R"], { channel: o }),
                      accessibilityLabel: s.intl.formatToPlainString(s.t.UZIMWS, { channel: l }),
                  }
                : t.type === i.rbe.DM
                  ? {
                        placeholder: s.intl.formatToPlainString(s.t["4c+CAx"], { channel: o }),
                        accessibilityLabel: s.intl.formatToPlainString(s.t.fqOxbV, { channel: l }),
                    }
                  : {
                        placeholder: s.intl.formatToPlainString(s.t["8lzR/R"], { channel: o }),
                        accessibilityLabel: s.intl.formatToPlainString(s.t.ih7ZSA, { channel: l }),
                    };
}
