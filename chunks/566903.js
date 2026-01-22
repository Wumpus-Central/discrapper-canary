n.d(t, {
    A: () => d,
}),
    n(747238);
var r = n(599026),
    i = n(440594),
    a = n(541806),
    s = n(765379),
    o = n(90644),
    l = n(82149),
    c = n(652215),
    u = n(985018);

function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (null == e ? void 0 : e.name) === "" ? null : null == e ? void 0 : e.name,
        d = (null == e ? void 0 : e.details) === "" ? null : null == e ? void 0 : e.details,
        f = (null == e ? void 0 : e.state) === "" ? null : null == e ? void 0 : e.state,
        p = (null == e ? void 0 : e.type) === c.$pd.STREAMING && null != d ? d : n;
    if (
        ((null == e ? void 0 : e.status_display_type) === r.A.NAME && null != n
            ? (p = n)
            : (null == e ? void 0 : e.status_display_type) === r.A.STATE && null != f
              ? (p = f)
              : (null == e ? void 0 : e.status_display_type) === r.A.DETAILS && null != d && (p = d),
        (0, s.A)(e))
    ) {
        let e = (0, i.A)(n);
        return {
            text: e,
            tooltip: e,
        };
    }
    if ((null == e ? void 0 : e.type) === c.$pd.PLAYING && null != p)
        return {
            text: p,
            tooltip: u.intl.formatToPlainString(u.t.lFApmz, {
                game: p,
            }),
        };
    if ((0, o.A)(e) && t && null != f) {
        var _;
        let e = null == (_ = f.split("; ")) ? void 0 : _.join(", ");
        return {
            text: e,
            tooltip: u.intl.formatToPlainString(u.t.Vnuxue, {
                name: e,
            }),
        };
    }
    return (0, l.Cy)(e) && null != n
        ? {
              text: n,
              tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, {
                  name: n,
              }),
          }
        : (null == e ? void 0 : e.type) === c.$pd.LISTENING && null != p
          ? {
                text: p,
                tooltip: u.intl.formatToPlainString(u.t.Vnuxue, {
                    name: p,
                }),
            }
          : (0, a.A)(e) && t && null != d
            ? {
                  text: d,
                  tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, {
                      name: d,
                  }),
              }
            : (null == e ? void 0 : e.type) === c.$pd.WATCHING && null != p
              ? {
                    text: p,
                    tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, {
                        name: p,
                    }),
                }
              : (null == e ? void 0 : e.type) === c.$pd.COMPETING && null != p
                ? {
                      text: p,
                      tooltip: u.intl.formatToPlainString(u.t.QQ2wVE, {
                          name: p,
                      }),
                  }
                : (null == e ? void 0 : e.type) === c.$pd.STREAMING && null != p
                  ? {
                        text: p,
                        tooltip: u.intl.formatToPlainString(u.t["0wJXSh"], {
                            name: p,
                        }),
                    }
                  : {};
}
