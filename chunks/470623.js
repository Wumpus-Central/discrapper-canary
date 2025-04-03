n.d(t, {
    AF: () => O,
    oL: () => j,
    xH: () => v
}),
    n(47120),
    n(566702);
var i = n(200651),
    r = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(372793),
    l = n(731965),
    c = n(430742),
    u = n(752305),
    d = n(592125),
    h = n(703558),
    p = n(883429),
    m = n(228392);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class g {
    constructor(e, t, n) {
        var i, r, o;
        f(this, 'channelId', void 0),
            f(this, '_set', void 0),
            f(this, 'get', void 0),
            f(this, 'editorHeight', void 0),
            f(this, 'editorAdditionRowHeight', void 0),
            f(this, 'listViewCardHeights', void 0),
            f(this, 'cardHeightVersion', void 0),
            f(this, 'nameError', void 0),
            f(this, 'messageError', void 0),
            f(this, 'appliedTags', void 0),
            f(this, 'popoutOpen', void 0),
            f(this, 'guidelinesOpen', void 0),
            f(this, 'previewing', void 0),
            f(this, 'onboardingExpanded', void 0),
            f(this, 'submitting', void 0),
            f(this, 'formOpen', void 0),
            f(this, 'name', void 0),
            f(this, 'textAreaState', void 0),
            f(this, 'hasClickedForm', void 0),
            f(this, 'titleFocused', void 0),
            f(this, 'bodyFocused', void 0),
            f(this, 'set', void 0),
            f(this, 'setEditorHeight', void 0),
            f(this, 'setEditorAdditionRowHeight', void 0),
            f(this, 'setCardHeight', void 0),
            f(this, 'setNameError', void 0),
            f(this, 'setMessageError', void 0),
            f(this, 'toggleAppliedTag', void 0),
            f(this, 'setPopoutOpen', void 0),
            f(this, 'setGuidelinesOpen', void 0),
            f(this, 'setPreviewing', void 0),
            f(this, 'setSubmitting', void 0),
            f(this, 'setFormOpen', void 0),
            f(this, 'setOnboardingExpanded', void 0),
            f(this, 'setTitleFocused', void 0),
            f(this, 'setBodyFocused', void 0),
            f(this, 'setName', void 0),
            f(this, 'setTextAreaState', void 0),
            f(this, 'setHasClickedForm', void 0),
            f(this, 'resetFormState', void 0),
            f(this, 'setFormOpenFromUserAction', void 0),
            (this.channelId = e),
            (this._set = t),
            (this.get = n),
            (this.editorHeight = 64),
            (this.editorAdditionRowHeight = 0),
            (this.listViewCardHeights = {}),
            (this.cardHeightVersion = 0),
            (this.nameError = null),
            (this.messageError = null),
            (this.appliedTags = new Set()),
            (this.popoutOpen = !1),
            (this.guidelinesOpen = !1),
            (this.previewing = !1),
            (this.onboardingExpanded = !1),
            (this.submitting = !1),
            (this.formOpen = !1),
            (this.name = ''),
            (this.textAreaState = (0, u.eK)('')),
            (this.hasClickedForm = !1),
            (this.titleFocused = !1),
            (this.bodyFocused = !1),
            (this.set = (e) => {
                (0, l.j)(() => this._set(e));
            }),
            (this.setEditorHeight = (e) => {
                this.set({ editorHeight: e });
            }),
            (this.setEditorAdditionRowHeight = (e) => {
                this.set({ editorAdditionRowHeight: e });
            }),
            (this.setCardHeight = (e, t) => {
                let { listViewCardHeights: n, cardHeightVersion: i } = this.get();
                n[e] !== t && ((n[e] = t), this.set({ cardHeightVersion: i + 1 }));
            }),
            (this.setNameError = (e) => {
                this.set({ nameError: e });
            }),
            (this.setMessageError = (e) => {
                this.set({ messageError: e });
            }),
            (this.toggleAppliedTag = (e) => {
                let { appliedTags: t } = this.get();
                (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({ appliedTags: t }), c.Z.changeThreadSettings(this.channelId, { appliedTags: t });
            }),
            (this.setPopoutOpen = (e) => {
                this.set({ popoutOpen: e });
            }),
            (this.setGuidelinesOpen = (e) => {
                this.set({ guidelinesOpen: e });
            }),
            (this.setPreviewing = (e) => {
                this.set({ previewing: e });
            }),
            (this.setSubmitting = (e) => {
                this.set({ submitting: e });
            }),
            (this.setFormOpen = (e) => {
                this.set({ formOpen: e }), p.Z.clearForumSearch(this.channelId);
            }),
            (this.setOnboardingExpanded = (e) => {
                this.set({ onboardingExpanded: e });
            }),
            (this.setTitleFocused = (e) => {
                this.set({ titleFocused: e });
            }),
            (this.setBodyFocused = (e) => {
                this.set({ bodyFocused: e });
            }),
            (this.setName = (e) => {
                this.set({ name: e }), c.Z.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = (e) => {
                this.set({ textAreaState: e }), c.Z.saveDraft(this.channelId, e.textValue, h.d.FirstThreadMessage);
            }),
            (this.setHasClickedForm = (e) => {
                this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
                let e = d.Z.getChannel(this.channelId),
                    t = null == e || null == e.template ? '' : e.template.trim();
                this.set({
                    name: '',
                    textAreaState: (0, u.eK)(t),
                    appliedTags: new Set(),
                    hasClickedForm: !1
                }),
                    p.Z.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
                if (this.hasClickedForm) return;
                let e = d.Z.getChannel(this.channelId);
                null != e &&
                    (0, m.HR)({
                        guildId: e.guild_id,
                        channelId: this.channelId
                    }),
                    this.set({
                        hasClickedForm: !0,
                        formOpen: !0
                    }),
                    p.Z.clearForumSearch(this.channelId);
            });
        let a = d.Z.getChannel(e);
        if (null == a) return;
        let s = null != (i = h.Z.getThreadSettings(a.id)) ? i : {},
            g = null == a.template ? '' : a.template.trim(),
            b = h.Z.getDraft(a.id, h.d.FirstThreadMessage),
            j = (0, u.eK)(null != b && '' !== b.trim() ? b : g);
        (this.name = null != (r = s.name) ? r : ''), (o = new Set(s.appliedTags)), (this.appliedTags = void 0 !== o ? o : new Set()), (this.formOpen = this.name.length > 0), (this.textAreaState = j);
    }
}
let b = r.createContext(null);
function j(e) {
    let { children: t, channel: n } = e,
        o = r.useMemo(() => (0, s.F)((e, t) => new g(n.id, e, t)), [n]);
    return (0, i.jsx)(b.Provider, {
        value: o,
        children: t
    });
}
function v(e, t) {
    let n = r.useContext(b);
    return a()(null != n, '[useForumPostComposerStore] Context should not be null'), n(e, t);
}
function O() {
    let e = r.useContext(b);
    return a()(null != e, '[useForumPostComposerStore] Context should not be null'), e;
}
