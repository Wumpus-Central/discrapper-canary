t.d(n, { Consent: () => k });
var i = t(31144),
    o = t(248702),
    s = t(899656),
    c = t(458741),
    r = t(727571),
    a = t(542075),
    d = t(321724),
    l = t(242003),
    h = t(967325),
    u = t(868282),
    b = t(47418),
    g = t(901510),
    C = t(778186),
    v = ({ config: e, manager: n, onFinish: t, onError: c }) => {
        let { t: u } = (0, i.n)(),
            v = (0, o.l)(null),
            [k, m] = (0, s.o)(
                () => {
                    if (n) return n;
                    if (!e) throw Error("Consent config is required");
                    return (0, C.w)({ config: e });
                },
                { manageLifecycle: !n },
            );
        (0, o._)(() => {
            "display" === k.status && v.current?.focus();
        }, [k.status]);
        let p = "checkboxes" in k ? k.checkboxes : void 0,
            x = (0, o.d)(() => (0, g.n)(p?.map((e) => e.required) ?? []), [p]);
        return "finished" === k.status
            ? (t?.(), null)
            : "error" === k.status
              ? (c?.(k.error), null)
              : "idle" === k.status || "loading" === k.status
                ? (0, o.v)(d.t, { hideText: !0 })
                : (0, o.v)(
                      r.t,
                      {
                          className: "IncodeConsentPage",
                          hideFooterBranding: !0,
                          hideHeader: !0,
                          children: (0, o.v)("div", {
                              class: "IncodeConsentContent",
                              children: [
                                  (0, o.v)("div", {
                                      class: "IncodeConsentBody",
                                      children: [
                                          (0, o.v)(a.n, {
                                              ref: v,
                                              className: "IncodeConsentTitle",
                                              tabIndex: -1,
                                              children: k.title,
                                          }),
                                          (0, o.v)(b.t, { content: k.richText, class: "IncodeRichText" }),
                                          (0, o.v)("div", {
                                              class: "IncodeConsentCheckboxList",
                                              role: "group",
                                              "aria-label": u("biometricConsent.consentOptions"),
                                              children: k.checkboxes.map((e) => {
                                                  let n = (0, g.t)(x, e.required),
                                                      t = n ? u(`forms.label.${n}`) : void 0;
                                                  return (0, o.v)(
                                                      h.t,
                                                      {
                                                          id: `consent-checkbox-${e.id}`,
                                                          class: "IncodeConsentCheckbox",
                                                          size: "s",
                                                          checked: e.checked,
                                                          required: e.required,
                                                          labelHint: t,
                                                          onChange: () => m.toggleCheckbox(e.id),
                                                          label: (0, o.v)("span", {
                                                              class: "IncodeConsentCheckboxLabel",
                                                              onClick: (e) => {
                                                                  e.target.closest("a") && e.stopPropagation();
                                                              },
                                                              children: (0, o.v)(b.t, {
                                                                  content: e.label,
                                                                  class: "IncodeRichText",
                                                                  disallowedTags: ["img"],
                                                              }),
                                                          }),
                                                      },
                                                      e.id,
                                                  );
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, o.v)(l.t, {
                                      "data-testid": "consent-submit",
                                      onClick: () => m.submit(),
                                      disabled: !k.canSubmit,
                                      isLoading: "submitting" === k.status,
                                      children: u("biometricConsent.button.continue"),
                                  }),
                              ],
                          }),
                      },
                      "ready",
                  );
    },
    k = ({ config: e, manager: n, onFinish: t, onError: i }) =>
        (0, o.v)(c.t, { children: e ? (0, o.v)(v, { config: e, manager: n, onFinish: t, onError: i }) : null });
(0, u.t)(k, "incode-consent");
