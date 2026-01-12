n.d(t, { P: () => o });
var r = n(427164);
function i(e, t, n) {
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
function a(e) {
    return (0, r.le)({
        name: e,
        kind: "user",
        variations: {
            0: { enabled: !1 },
            1: { enabled: !0 },
        },
        defaultConfig: { enabled: !1 },
    });
}
class o {
    isEligibleForEditProfileUpsell() {
        return null != this.editProfileLinkedDc && null != this.editProfileUnlinkedDc;
    }
    isEligibleForSuggestions() {
        return null != this.suggestedWidgetLinkedDc;
    }
    constructor(e) {
        i(this, "applicationId", void 0),
            i(this, "widgetTemplateId", void 0),
            i(this, "viewExperiment", void 0),
            i(this, "editExperiment", void 0),
            i(this, "coachmarkExperiment", void 0),
            i(this, "editProfileUpsellImage", void 0),
            i(this, "heroPlaceholderImage", void 0),
            i(this, "miniPreviewImage", void 0),
            i(this, "editProfileUnlinkedDc", void 0),
            i(this, "editProfileLinkedDc", void 0),
            i(this, "suggestedWidgetLinkedDc", void 0),
            (this.applicationId = e.application_id),
            (this.widgetTemplateId = e.widget_template_id),
            (this.viewExperiment = a(e.view_experiment)),
            (this.editExperiment = a(e.edit_experiment)),
            (this.coachmarkExperiment = null != e.coachmark_experiment ? a(e.coachmark_experiment) : void 0),
            (this.editProfileUpsellImage = e.edit_profile_upsell_image),
            (this.heroPlaceholderImage = e.hero_placeholder_image),
            (this.miniPreviewImage = e.mini_preview_image),
            (this.editProfileUnlinkedDc = e.edit_profile_unlinked_dc),
            (this.editProfileLinkedDc = e.edit_profile_linked_dc),
            (this.suggestedWidgetLinkedDc = e.suggested_widget_linked_dc);
    }
}
