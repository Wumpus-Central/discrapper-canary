"use strict";
n.d(t, { V: () => s });
var r = n(945810);
function i(e) {
    return (0, r.mj)({
        name: e,
        kind: "user",
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
        defaultConfig: { enabled: !1 },
    });
}
class s {
    applicationId;
    widgetTemplateId;
    viewExperiment;
    editExperiment;
    coachmarkExperiment;
    editProfileUpsellImage;
    heroPlaceholderImage;
    miniPreviewImage;
    editProfileUnlinkedDc;
    editProfileLinkedDc;
    suggestedWidgetLinkedDc;
    constructor(e) {
        (this.applicationId = e.application_id),
            (this.widgetTemplateId = e.widget_template_id),
            (this.viewExperiment = i(e.view_experiment)),
            (this.editExperiment = i(e.edit_experiment)),
            (this.coachmarkExperiment = null != e.coachmark_experiment ? i(e.coachmark_experiment) : void 0),
            (this.editProfileUpsellImage = e.edit_profile_upsell_image),
            (this.heroPlaceholderImage = e.hero_placeholder_image),
            (this.miniPreviewImage = e.mini_preview_image),
            (this.editProfileUnlinkedDc = e.edit_profile_unlinked_dc),
            (this.editProfileLinkedDc = e.edit_profile_linked_dc),
            (this.suggestedWidgetLinkedDc = e.suggested_widget_linked_dc);
    }
    isEligibleForEditProfileUpsell() {
        return null != this.editProfileLinkedDc && null != this.editProfileUnlinkedDc;
    }
    isEligibleForSuggestions() {
        return null != this.suggestedWidgetLinkedDc;
    }
}
