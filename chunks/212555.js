n.d(t, {
    A: () => _,
}),
    n(747238),
    n(896048),
    n(321073);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(597864),
    s = n(880652),
    o = n(710871);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e) {
    let { question: t, questionId: n, value: s, onValueChange: l } = e,
        { selectedChoice: c, textInputs: u } = ((e) => {
            if (null == e || "" === e)
                return {
                    selectedChoice: null,
                    textInputs: {},
                };
            let t = e.split(":TEXT:", 2),
                n = t[0],
                r = {};
            return (
                t.length > 1 && (r[n] = t[1]),
                {
                    selectedChoice: n,
                    textInputs: r,
                }
            );
        })(s),
        d = (e) => {
            var r;
            let i = u[e];
            null == i || "" === i
                ? l(n, e)
                : null != t.Choices && (null == (r = t.Choices[e]) ? void 0 : r.TextEntry) === "true"
                  ? l(n, "".concat(e, ":TEXT:").concat(i))
                  : l(n, e);
        },
        f = (e, t) => {
            l(n, null != t && "" !== t ? "".concat(e, ":TEXT:").concat(t) : e);
        };
    return null == t.Choices
        ? (0, r.jsx)("div", {
              className: o.kL,
              children: (0, r.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  className: o.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, r.jsx)("div", {
              className: o.kL,
              children: (0, r.jsx)("div", {
                  className: o.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, r.jsx)(
                          a.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: c === t,
                              onSelectionChange: d,
                              inputType: "radio",
                              textInputValue: u[t],
                              onTextInputChange: f,
                          },
                          t,
                      );
                  }),
              }),
          });
}

function p(e) {
    let { question: t, questionId: n, value: s, onValueChange: l } = e,
        { selectedChoices: u, textInputs: f } = ((e) => {
            if (null == e || "" === e)
                return {
                    selectedChoices: [],
                    textInputs: {},
                };
            let t = e.split(","),
                n = [],
                r = {};
            return (
                t.forEach((e) => {
                    let t = e.split(":TEXT:", 2),
                        i = t[0];
                    n.push(i), t.length > 1 && (r[i] = t[1]);
                }),
                {
                    selectedChoices: n,
                    textInputs: r,
                }
            );
        })(s),
        p = (e, t) =>
            e
                .map((e) => {
                    let n = t[e];
                    return null != n && "" !== n ? "".concat(e, ":TEXT:").concat(n) : e;
                })
                .join(","),
        _ = (e) => {
            let t = u.includes(e) ? u.filter((t) => t !== e) : [...u, e],
                r = c({}, f);
            t.includes(e) || delete r[e], l(n, p(t, r));
        },
        h = (e, t) => {
            l(
                n,
                p(
                    u,
                    d(c({}, f), {
                        [e]: t,
                    }),
                ),
            );
        };
    return null == t.Choices || 0 === Object.keys(t.Choices).length
        ? (0, r.jsx)("div", {
              className: o.kL,
              children: (0, r.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  className: o.WN,
                  children: "No choices available for this question",
              }),
          })
        : (0, r.jsx)("div", {
              className: o.kL,
              children: (0, r.jsx)("div", {
                  className: o.Me,
                  children: Object.entries(t.Choices).map((e) => {
                      let [t, n] = e;
                      return (0, r.jsx)(
                          a.B,
                          {
                              choiceId: t,
                              choice: n,
                              isSelected: u.includes(t),
                              onSelectionChange: _,
                              inputType: "checkbox",
                              textInputValue: f[t],
                              onTextInputChange: h,
                          },
                          t,
                      );
                  }),
              }),
          });
}

function _(e) {
    let { question: t, questionId: n, value: i, onValueChange: a } = e;
    return t.Selector === s.BO.SINGLE_ANSWER
        ? (0, r.jsx)(f, {
              question: t,
              questionId: n,
              value: i,
              onValueChange: a,
          })
        : (0, r.jsx)(p, {
              question: t,
              questionId: n,
              value: i,
              onValueChange: a,
          });
}
