n.d(t, { A: () => l });
var i = n(47167),
    r = n(652215),
    a = n(985018);
function l(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: l = !1 } = e,
        o = (0, i.Ay)(t, !0),
        s = (0, i.Ay)(t, !1);
    return null == t || null == o
        ? { placeholder: a.intl.string(a.t.MKDeyL), accessibilityLabel: a.intl.string(a.t.MKDeyL) }
        : l
          ? { placeholder: a.intl.string(a.t.YzpScd), accessibilityLabel: a.intl.string(a.t.YzpScd) }
          : n
            ? { placeholder: a.intl.string(a.t["RRvRp/"]), accessibilityLabel: a.intl.string(a.t["RRvRp/"]) }
            : t.isForumPost()
              ? {
                    placeholder: a.intl.formatToPlainString(a.t.Y6qWLc, { channel: o }),
                    accessibilityLabel: a.intl.formatToPlainString(a.t.KffKoR, { channel: s }),
                }
              : r.kvI.THREADS.has(t.type)
                ? {
                      placeholder: a.intl.formatToPlainString(a.t["8lzR/R"], { channel: o }),
                      accessibilityLabel: a.intl.formatToPlainString(a.t.UZIMWS, { channel: s }),
                  }
                : t.type === r.rbe.DM
                  ? {
                        placeholder: a.intl.formatToPlainString(a.t["4c+CAx"], { channel: o }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.fqOxbV, { channel: s }),
                    }
                  : {
                        placeholder: a.intl.formatToPlainString(a.t["8lzR/R"], { channel: o }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.ih7ZSA, { channel: s }),
                    };
}
