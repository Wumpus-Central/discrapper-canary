n.d(t, { Z: () => l });
var a = n(951288);
n(647438);
var r = n(132392),
    i = n(342781);
let l = (e) => {
    var t;
    let { onSubmit: n, disabled: l } = e,
        { task: o } = (0, r.T)(),
        s = i.o[o.ui_component.component.type];
    return null == s
        ? null
        : (0, a.jsx)(s, {
              configData: o.ui_component.component.data,
              onSubmit: n,
              taskId: o.task_id,
              flowId: null == (t = o.flow_context) ? void 0 : t.flow_id,
              assignmentId: o.assignment_id,
              disabled: l,
          });
};
