n.d(t, { Z: () => l });
var a = n(54381);
n(473749);
var r = n(132392),
    i = n(342781);
let l = (e) => {
    var t;
    let { onSubmit: n, disabled: l } = e,
        { task: s } = (0, r.T)(),
        o = i.o[s.ui_component.component.type];
    return null == o
        ? null
        : (0, a.jsx)(o, {
              configData: s.ui_component.component.data,
              onSubmit: n,
              taskId: s.task_id,
              flowId: null == (t = s.flow_context) ? void 0 : t.flow_id,
              assignmentId: s.assignment_id,
              disabled: l,
          });
};
