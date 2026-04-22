i.d(e, { A: () => o });
var n = i(47167),
    a = i(652215),
    l = i(985018);
function o(t) {
    let { channel: e, isReadonly: i = !1, isCreatingThread: o = !1 } = t,
        r = (0, n.Ay)(e, !0),
        c = (0, n.Ay)(e, !1);
    return null == e || null == r
        ? { placeholder: l.intl.string(l.t.MKDeyL), accessibilityLabel: l.intl.string(l.t.MKDeyL) }
        : o
          ? { placeholder: l.intl.string(l.t.YzpScd), accessibilityLabel: l.intl.string(l.t.YzpScd) }
          : i
            ? { placeholder: l.intl.string(l.t["RRvRp/"]), accessibilityLabel: l.intl.string(l.t["RRvRp/"]) }
            : e.isForumPost()
              ? {
                    placeholder: l.intl.formatToPlainString(l.t.Y6qWLc, { channel: r }),
                    accessibilityLabel: l.intl.formatToPlainString(l.t.KffKoR, { channel: c }),
                }
              : a.kvI.THREADS.has(e.type)
                ? {
                      placeholder: l.intl.formatToPlainString(l.t["8lzR/R"], { channel: r }),
                      accessibilityLabel: l.intl.formatToPlainString(l.t.UZIMWS, { channel: c }),
                  }
                : e.type === a.rbe.DM
                  ? {
                        placeholder: l.intl.formatToPlainString(l.t["4c+CAx"], { channel: r }),
                        accessibilityLabel: l.intl.formatToPlainString(l.t.fqOxbV, { channel: c }),
                    }
                  : {
                        placeholder: l.intl.formatToPlainString(l.t["8lzR/R"], { channel: r }),
                        accessibilityLabel: l.intl.formatToPlainString(l.t.ih7ZSA, { channel: c }),
                    };
}
