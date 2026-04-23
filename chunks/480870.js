n.d(e, { A: () => o });
var i = n(47167),
    l = n(652215),
    a = n(985018);
function o(t) {
    let { channel: e, isReadonly: n = !1, isCreatingThread: o = !1 } = t,
        r = (0, i.Ay)(e, !0),
        u = (0, i.Ay)(e, !1);
    return null == e || null == r
        ? { placeholder: a.intl.string(a.t.MKDeyL), accessibilityLabel: a.intl.string(a.t.MKDeyL) }
        : o
          ? { placeholder: a.intl.string(a.t.YzpScd), accessibilityLabel: a.intl.string(a.t.YzpScd) }
          : n
            ? { placeholder: a.intl.string(a.t["RRvRp/"]), accessibilityLabel: a.intl.string(a.t["RRvRp/"]) }
            : e.isForumPost()
              ? {
                    placeholder: a.intl.formatToPlainString(a.t.Y6qWLc, { channel: r }),
                    accessibilityLabel: a.intl.formatToPlainString(a.t.KffKoR, { channel: u }),
                }
              : l.kvI.THREADS.has(e.type)
                ? {
                      placeholder: a.intl.formatToPlainString(a.t["8lzR/R"], { channel: r }),
                      accessibilityLabel: a.intl.formatToPlainString(a.t.UZIMWS, { channel: u }),
                  }
                : e.type === l.rbe.DM
                  ? {
                        placeholder: a.intl.formatToPlainString(a.t["4c+CAx"], { channel: r }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.fqOxbV, { channel: u }),
                    }
                  : {
                        placeholder: a.intl.formatToPlainString(a.t["8lzR/R"], { channel: r }),
                        accessibilityLabel: a.intl.formatToPlainString(a.t.ih7ZSA, { channel: u }),
                    };
}
