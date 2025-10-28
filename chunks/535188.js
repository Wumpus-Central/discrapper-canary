n.d(t, { Z: () => i });
var a = n(951288);
n(647438);
var r = n(132392),
    l = n(342781);
let i = (e) => {
    var t;
    let { onSubmit: n, disabled: i } = e,
        { task: o } = (0, r.T)(),
        s = l.o[o.ui_component.component.type];
    return null == s
        ? null
        : (0, a.jsx)(s, {
              configData: o.ui_component.component.data,
              onSubmit: n,
              taskId: o.task_id,
              flowId: null == (t = o.flow_context) ? void 0 : t.flow_id,
              assignmentId: o.assignment_id,
              disabled: i,
          });
};
