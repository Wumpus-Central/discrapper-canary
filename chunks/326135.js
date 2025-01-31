n.d(t, { G: () => a }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(981631);
let a = (e) => {
    let { id: t, name: n, locale: a } = e,
        r = 'https://'.concat(i.xr4, '/hc/').concat(a.toLowerCase(), '/requests/new'),
        l = new URLSearchParams();
    return l.append('tf_12275088515223', 'field_value_dc_category_report_an_app_bot'), l.append('tf_12276208289431', 'field_value_dc_reported_action_app_directory'), l.append('tf_12094971213335', t), l.append('ticket_form_id', '12275528604823'), l.append('tf_subject', 'App Directory Report '.concat(n, ' ').concat(t)), ''.concat(r, '?').concat(l.toString());
};
