n.d(t, { A: () => s });
var i = n(47167),
    l = n(652215),
    a = n(985018);
function s(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: s = !1 } = e,
        r = (0, i.Ay)(t, !0),
        o = (0, i.Ay)(t, !1);
    return null == t || null == r
        ? { placeholder: a.intl.string(a.t.MKDeyL), accessibilityLabel: a.intl.string(a.t.MKDeyL) }
        : s
          ? { placeholder: a.intl.string(a.t.YzpScd), accessibilityLabel: a.intl.string(a.t.YzpScd) }
          : n
            ? { placeholder: a.intl.string(a.t["RRvRp/"]), accessibilityLabel: a.intl.string(a.t["RRvRp/"]) }
            : t.isForumPost()
              ? {
                    placeholder: a.intl.formatToPlainString(a.t.Y6qWLc, { channel: r }),
                    accessibilityLabel: a.intl.formatToPlainString(a.t.KffKoR, { channel: o }),
                }
              : l.kvI.THREADS.has(t.type)
                ? {
                      placeholder: a.intl.formatToPlainString(a.t["8lzR/R"], { channel: r }),
                      accessibilityLabel: a.intl.formatToPlainString(a.t.UZIMWS, { channel: o }),
                  }
                : t.type === l.rbe.DM
                  ? {
                        placeholder: a.intl.formatToPlainString(a.t["4c+CAx"], { channel: r }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.fqOxbV, { channel: o }),
                    }
                  : {
                        placeholder: a.intl.formatToPlainString(a.t["8lzR/R"], { channel: r }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.ih7ZSA, { channel: o }),
                    };
}
